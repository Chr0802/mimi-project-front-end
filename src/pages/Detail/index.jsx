import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography, List, Avatar, Space, Descriptions, Row, Col, Tag } from 'antd';
import { useIntl, FormattedMessage, useParams } from 'umi';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

import Graphin, { Behaviors } from '@antv/graphin';
import { useRequest } from '@umijs/hooks';
import { useEffect, useState } from 'react';
import '@antv/graphin-icons/dist/index.css';
import { getCaseDetail, getCaseGraph } from '@/services/ant-design-pro/api';

import styles from './detail.less';

const { Title, Text, Paragraph } = Typography;
const { DragCanvas, ZoomCanvas } = Behaviors;

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://www.ipr007.com/Modules/Instance_Detail.aspx?no=IN00000002600000578&cmdType=all',
    title: `带走老东家“高新机密” 技术骨干获刑判赔20万 ${i}`,
    viewNum: '778',
    avatar: 'https://joeschmoe.io/api/v1/random',
    description: '带走老东家“高新机密” 技术骨干获刑判赔20万',
    content:
      '2016年06月17日06:15 汉网-武汉晚报 本报讯（记者孙珺 通讯员褚家威）昨天，全省打击侵权假冒工作电视电话会议披露了2015年武汉市保护知识产权十大典型案件。其中，高新技术商业秘密侵权因案件侦查取证难度大、经济损失的确定颇具争议等成为焦点。武汉市商务局介绍，武汉一家高新技术企业生产的“格雷母线定位设备”广泛用于钢铁、港口......',
    year: '2016',
    location: '湖北',
    industry: '(C)制造业-->(36)专用设备制造业',
    category: ['技术信息', '经营信息'],
    form: '记忆',
    nature: '故意',
    infringer: '内部涉密人员',
    method: '自盗',
    purpose: '跳槽',
  });
}

const GraphComponent = ({ data }) => {
  const [graph, setGraph] = useState();
  const { run, loading } = useRequest(getCaseGraph, {
    manual: true,
    onSuccess: (res) => {
      const styleDict = {
        time: '#5B8FF9',
        loc: '#CDDDFD',
        industry: '#61DDAA',
        cate: '#CDF3E4',
        carrier: '#65789B',
        nature: '#CED4DE',
        pro: '#F6BD16',
        way: '#FCEBB9',
        aim: '#7262fd',
        event: '#7262fd',
        people: '#78D3F8',
        org: '#DECFEA',
        law: '#008685',
        article: '#FFE0ED',
      };
      const nodes = res.nodes.map((node) => {
        let _node = {
          id: String(node.id),
          data: {
            type: node.group,
          },
          style: {
            label: {
              value: node.label,
            },
            keyshape: {
              // size: node.value * 2,
              stroke: styleDict[node.group],
              fill: styleDict[node.group],
              fillOpacity: 0.2,
              strokeOpacity: 1,
            },
          },
        };
        return _node;
      });
      const edges = res.edges.map((edge) => {
        let _edge = {
          source: String(edge.source),
          target: String(edge.target),
          style: {
            label: {
              value: edge.label,
              // fill: "#999"
            },
          },
        };
        return _edge;
      });
      setGraph({ nodes, edges });
    },
  });
  useEffect(() => {
    run(data);
  }, [data]);
  return (
    <>
      <Title level={5}>图谱展示</Title>
      {graph ? (
        <Graphin data={graph} layout={{ type: 'graphin-force' }} fitview>
          <ZoomCanvas />
          <DragCanvas />
        </Graphin>
      ) : null}
    </>
  );
};

const Contents = ({ Paras }) => Paras?.map((para) => <Paragraph key={para}>{para}</Paragraph>);

const CategoryTags = ({ categories }) => categories?.map((cat) => <Tag key={cat}>{cat}</Tag>);

const RightTb = ({ newsItem }) => (
  <Descriptions title="分析" size="small" labelStyle={{ color: '#c41d7f' }}>
    <Descriptions.Item label="案例时间" span={3}>
      {newsItem?.year}
    </Descriptions.Item>
    <Descriptions.Item label="发生地点" span={3}>
      {newsItem?.location}
    </Descriptions.Item>
    <Descriptions.Item label="性质" span={3}>
      {newsItem?.nature}
    </Descriptions.Item>
    <Descriptions.Item label="侵权人" span={3}>
      {newsItem?.infringer}
    </Descriptions.Item>
    <Descriptions.Item label="侵权方式" span={3}>
      {newsItem?.method}
    </Descriptions.Item>
    <Descriptions.Item label="侵权目的" span={3}>
      {newsItem?.purpose}
    </Descriptions.Item>
    <Descriptions.Item label="载体形式" span={3}>
      {newsItem?.form}
    </Descriptions.Item>
    <Descriptions.Item label="商业秘密类别" span={3}>
      <CategoryTags categories={newsItem?.category} />
    </Descriptions.Item>
    <Descriptions.Item label="涉及行业" span={3}>
      {newsItem?.industry}
    </Descriptions.Item>
  </Descriptions>
);

const Detail = () => {
  const intl = useIntl();
  const param = useParams();

  const [caseDetail, setDetail] = useState({
    href: 'http://www.ipr007.com/Modules/Instance_Detail.aspx?no=IN00000002600000578&cmdType=all',
    title: `带走老东家“高新机密” 技术骨干获刑判赔20万`,
    viewNum: String(Math.ceil(Math.random() * 10) ** 2 + Math.ceil(Math.random() * 10)),
    avatar: 'https://joeschmoe.io/api/v1/random',
    description: '带走老东家“高新机密” 技术骨干获刑判赔20万',
    content: [
      '本报讯（记者孙珺 通讯员褚家威）昨天，全省打击侵权假冒工作电视电话会议披露了2015年武汉市保护知识产权十大典型案件。其中，高新技术商业秘密侵权因案件侦查取证难度大、经济损失的确定颇具争议等成为焦点。',
      '武汉市商务局介绍，武汉一家高新技术企业生产的“格雷母线定位设备”广泛用于钢铁、港口等行业。杨某和闫某原分别为该公司销售经理和技术骨干，两人2012年相继离职后，利用曾经工作期间获得的技术以及掌握的销售渠道，组织生产并交货46套“格雷母线定位设备”，合同总价款460余万元，收到货款近200万元。两人因侵犯商业秘密行为造成原供职公司160余万元经济损失。',
      '经过不公开开庭审理，去年，武汉市江岸区人民法院以侵犯商业秘密罪判处被告人杨某有期徒刑一年三个月，缓刑二年，并处罚金人民币25万元；以侵犯商业秘密罪判处被告人闫某有期徒刑一年，缓刑一年六个月，并处罚金人民币20万元。',
    ],
    year: '2016',
    source: '汉网-武汉晚报',
    location: '湖北',
    industry: '(C)制造业-->(36)专用设备制造业',
    category: ['技术信息', '经营信息'],
    form: '记忆',
    nature: '故意',
    infringer: '内部涉密人员',
    method: '自盗',
    purpose: '跳槽',
  });
  const { run, loading } = useRequest(getCaseDetail, {
    manual: true,
    onSuccess: (res) => {
      console.log(res);
      setDetail(res);
    },
    onError: (e) => {
      console.log(e);
    },
  });
  useEffect(() => {
    run(param);
  }, [param]);

  return (
    <PageContainer>
      <Card loading={loading}>
        <Row>
          <Col span={22} offset={1}>
            <Space direction="vertical">
              {/* <Divider orientation="left">案例</Divider> */}
              <Title>{caseDetail?.title}</Title>
              <Text type="secondary">
                {`${caseDetail?.year}年${Math.floor(Math.random() * 10) + 1}月${
                  Math.floor(Math.random() * 30) + 1
                }日 ` +
                  ' ' +
                  caseDetail?.location +
                  (Math.round(Math.random()) ? '晚报' : '日报')}
              </Text>
              <Contents Paras={caseDetail?.content} />
            </Space>
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={8} offset={1}>
            <RightTb newsItem={caseDetail} />
          </Col>
          <Col span={15}>
            {/* <Divider orientation="left">图谱</Divider> */}
            <GraphComponent data={param} />
          </Col>
        </Row>
      </Card>
    </PageContainer>
  );
};

export default Detail;
