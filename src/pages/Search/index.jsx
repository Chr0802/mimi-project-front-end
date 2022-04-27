import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import {
  Card,
  Alert,
  Typography,
  List,
  Avatar,
  Space,
  Descriptions,
  Row,
  Col,
  Tag,
  Input,
} from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import styles from './search.less';
import { Link } from 'umi';
import { getSiZhi } from '@/services/ant-design-pro/api';
import { useRequest } from '@umijs/hooks';
import { useEffect, useState } from 'react';
import Graphin, { Behaviors } from '@antv/graphin';

const { DragCanvas, ZoomCanvas } = Behaviors;

const SearchResult = ({ graph }) => {
  return (
    <>
      <Typography.Title level={5}>搜索结果</Typography.Title>
      {graph ? (
        <Graphin data={graph} layout={{ type: 'graphin-force' }} fitview>
          <ZoomCanvas />
          <DragCanvas />
        </Graphin>
      ) : null}
    </>
  );
};

const Search = () => {
  const [result, setResult] = useState({
    nodes: [
      {
        id: '001',
        x: 100,
        y: 100,
        style: {
          label: {
            value: '窃密事件',
          },
          keyshape: {
            size: 40,
            stroke: '#46a7a6',
            fill: '#46a7a6',
            fillOpacity: 0.2,
            strokeOpacity: 1,
          },
        },
      },
      {
        id: '002',
        x: 100,
        y: 100,
        style: {
          label: {
            value: '泄密事件',
          },
          keyshape: {
            size: 40,
            stroke: '#FF6A00',
            fill: '#FF6A00',
            fillOpacity: 0.2,
            strokeOpacity: 1,
          },
        },
      },
    ],
    edges: [
      {
        source: '001',
        target: '002',
      },
    ],
  });
  const [wd, setWd] = useState();
  const { run, loading } = useRequest(getSiZhi, {
    manual: true,
    onSuccess: (res) => {
      console.log(res);
      const nodes = res.nodes.map((node) => {
        let _node = {
          id: String(node.id),
          data: {
            type: node.categories[0],
          },
          style: {
            label: {
              value: node.label,
            },
            keyshape: {
              size: node.value * 2,
              stroke: node.categories[0] == 'cate1' ? '#FF6A00' : '#46a7a6',
              fill: node.categories[0] == 'cate1' ? '#FF6A00' : '#46a7a6',
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
      setResult({ nodes, edges });
    },
    onError: (e) => {
      console.log(e);
    },
  });
  useEffect(() => {
    if (wd) {
      run({ wd });
    }
  }, [wd]);

  const onSearch = (value) => {
    if (value) {
      console.log(`search wd is ${value}`);
      setWd(value);
    }
  };

  return (
    <PageContainer>
      <Card>
        <Row>
          <Col span={14} offset={5}>
            <Input.Search
              onSearch={onSearch}
              size="large"
              placeholder="请输入搜索关键词"
              loading={loading}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={20} offset={2}>
            <SearchResult graph={result} />
          </Col>
        </Row>
        {/* <iframe width='100%' height='600px' src='https://www.ownthink.com/knowledge.html'></iframe> */}
      </Card>
    </PageContainer>
  );
};

export default Search;
