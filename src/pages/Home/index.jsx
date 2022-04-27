import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography, List, Avatar, Space, Descriptions, Row, Col, Tag } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import styles from './home.less';
import { Link } from 'umi';
import { getCases } from '@/services/ant-design-pro/api';
import { useRequest } from '@umijs/hooks';
import { useEffect, useState } from 'react';
import Paragraph from 'antd/lib/skeleton/Paragraph';

const CodePreview = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: `/detail/${i}`,
    title: `带走老东家“高新机密” 技术骨干获刑判赔20万 ${i}`,
    viewNum: String(Math.ceil(Math.random() * 10) ** 2 + Math.ceil(Math.random() * 10)),
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

const CategoryTags = ({ categories }) => categories.map((cat) => <Tag key={cat}>{cat}</Tag>);

const RightTb = ({ newsItem }) => (
  <Descriptions title="分析" size="small" labelStyle={{ color: '#c41d7f' }}>
    <Descriptions.Item label="案例时间">{newsItem?.year}</Descriptions.Item>
    <Descriptions.Item label="发生地点">{newsItem?.location}</Descriptions.Item>
    <Descriptions.Item label="性质">{newsItem?.nature}</Descriptions.Item>
    <Descriptions.Item label="侵权人">{newsItem?.infringer}</Descriptions.Item>
    <Descriptions.Item label="侵权方式">{newsItem?.method}</Descriptions.Item>
    <Descriptions.Item label="侵权目的">{newsItem?.purpose}</Descriptions.Item>
    <Descriptions.Item label="商业秘密类别" span={2}>
      <CategoryTags categories={newsItem?.category} />
    </Descriptions.Item>
    <Descriptions.Item label="载体形式">{newsItem?.form}</Descriptions.Item>
    <Descriptions.Item label="涉及行业" span={3}>
      {newsItem?.industry}
    </Descriptions.Item>
  </Descriptions>
);

const Home = () => {
  const intl = useIntl();

  const [caseList, setCaseList] = useState([]);
  const { run, loading } = useRequest(getCases, {
    manual: true,
    onSuccess: (res) => {
      console.log(res);
      setCaseList(res.data);
    },
    onError: (e) => {
      console.log(e);
    },
  });
  useEffect(() => {
    run();
  }, []);

  return (
    <PageContainer>
      <Card>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 5,
          }}
          dataSource={caseList}
          footer={<div>{/* <b>ant design</b> footer part */}</div>}
          renderItem={(item) => (
            <List.Item key={item.title}>
              <Row>
                <Col span={14}>
                  <List.Item.Meta
                    title={<Link to={`/detail/${item.id}`}>{item.title}</Link>}
                    description={
                      '浏览' +
                      String(Math.ceil(Math.random() * 10) ** 2 + Math.ceil(Math.random() * 10)) +
                      '次'
                    }
                  />
                  <Typography.Paragraph ellipsis={{ rows: 4 }}>{item.content}</Typography.Paragraph>
                </Col>
                <Col span={9} offset={1}>
                  <RightTb newsItem={item} />
                </Col>
              </Row>
            </List.Item>
          )}
        />
      </Card>
    </PageContainer>
  );
};

export default Home;
