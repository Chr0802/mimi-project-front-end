import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography, List, Avatar, Space, Descriptions, Row, Col, Tag } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import styles from './dashboard.less';
import { Link } from 'umi';
import { getCases } from '@/services/ant-design-pro/api';
import { useRequest } from '@umijs/hooks';
import { useEffect, useState } from 'react';
import { Pie, G2, Area, Column } from '@ant-design/plots';
import { AreaMap, ChoroplethMap } from '@ant-design/maps';
import { isNull } from 'lodash';

const data_pie1 = [
  {
    type: '法宝推荐',
    value: 1001,
  },
  {
    type: '经典案例',
    value: 156,
  },
  {
    type: '典型案例',
    value: 31,
  },
  {
    type: '普通案例',
    value: 30,
  },
  {
    type: '评析案例',
    value: 20,
  },
  {
    type: '公报案例',
    value: 9,
  },
  {
    type: '参阅案例',
    value: 2,
  },
];
const data_pie2 = [
  {
    type: '知识产权',
    value: 798,
  },
  {
    type: '刑事',
    value: 415,
  },
  {
    type: '民事',
    value: 28,
  },
  {
    type: '行政',
    value: 3,
  },
  {
    type: '执行',
    value: 31,
  },
];
const data_pie3 = [
  {
    type: '一审宣判',
    value: 797,
  },
  {
    type: '二审维持原判',
    value: 285,
  },
  {
    type: '二审改判',
    value: 132,
  },
  {
    type: '再审维持原判',
    value: 11,
  },
  {
    type: '再审改判',
    value: 4,
  },
];
const data_pie4 = [
  {
    type: '电子',
    value: 147,
  },
  {
    type: '记忆',
    value: 46,
  },
  {
    type: '电子+记忆',
    value: 41,
  },
  {
    type: '电子+纸质',
    value: 20,
  },
  {
    type: '纸质',
    value: 13,
  },
  {
    type: '事物',
    value: 3,
  },
  {
    type: '其他',
    value: 10,
  },
];

const data_area = [
  {
    Date: '1995',
    scales: 5,
  },
  {
    Date: '1669',
    scales: 10,
  },
  {
    Date: '1997',
    scales: 8,
  },
  {
    Date: '1998',
    scales: 16,
  },
  {
    Date: '1999',
    scales: 21,
  },
  {
    Date: '2001',
    scales: 20,
  },
  {
    Date: '2002',
    scales: 29,
  },
  {
    Date: '2003',
    scales: 44,
  },
  {
    Date: '2004',
    scales: 53,
  },
  {
    Date: '2005',
    scales: 61,
  },
  {
    Date: '2006',
    scales: 70,
  },
  {
    Date: '2007',
    scales: 68,
  },
  {
    Date: '2008',
    scales: 72,
  },
  {
    Date: '2009',
    scales: 91,
  },
  {
    Date: '2010',
    scales: 51,
  },
  {
    Date: '2011',
    scales: 42,
  },
  {
    Date: '2012',
    scales: 42,
  },
  {
    Date: '2013',
    scales: 61,
  },
  {
    Date: '2014',
    scales: 47,
  },
  {
    Date: '2015',
    scales: 48,
  },
  {
    Date: '2016',
    scales: 51,
  },
  {
    Date: '2017',
    scales: 24,
  },
  {
    Date: '2018',
    scales: 25,
  },
  {
    Date: '2019',
    scales: 27,
  },
  {
    Date: '2020',
    scales: 20,
  },
];

const data_map = [
  {
    name: '云南省',
    code: 530000,
    value: 0,
  },
  {
    name: '黑龙江省',
    code: 230000,
    value: 15,
  },
  {
    name: '贵州省',
    code: 520000,
    value: 9,
  },
  {
    name: '北京市',
    code: 110000,
    value: 236,
  },
  {
    name: '河北省',
    code: 130000,
    value: 29,
  },
  {
    name: '山西省',
    code: 140000,
    value: 12,
  },
  {
    name: '吉林省',
    code: 220000,
    value: 5,
  },
  {
    name: '宁夏回族自治区',
    code: 640000,
    value: 3,
  },
  {
    name: '辽宁省',
    code: 210000,
    value: 26,
  },
  {
    name: '海南省',
    code: 460000,
    value: 2,
  },
  {
    name: '内蒙古自治区',
    code: 150000,
    value: 7,
  },
  {
    name: '天津市',
    code: 120000,
    value: 13,
  },
  {
    name: '新疆维吾尔自治区',
    code: 650000,
    value: 0,
  },
  {
    name: '上海市',
    code: 310000,
    value: 137,
  },
  {
    name: '陕西省',
    code: 610000,
    value: 27,
  },
  {
    name: '甘肃省',
    code: 620000,
    value: 18,
  },
  {
    name: '安徽省',
    code: 340000,
    value: 15,
  },
  {
    name: '香港特别行政区',
    code: 810000,
    value: 0,
  },
  {
    name: '广东省',
    code: 440000,
    value: 140,
  },
  {
    name: '河南省',
    code: 410000,
    value: 40,
  },
  {
    name: '湖南省',
    code: 430000,
    value: 38,
  },
  {
    name: '江西省',
    code: 360000,
    value: 18,
  },
  {
    name: '四川省',
    code: 510000,
    value: 25,
  },
  {
    name: '广西壮族自治区',
    code: 450000,
    value: 23,
  },
  {
    name: '江苏省',
    code: 320000,
    value: 126,
  },
  {
    name: '澳门特别行政区',
    code: 820000,
    value: 0,
  },
  {
    name: '浙江省',
    code: 330000,
    value: 135,
  },
  {
    name: '山东省',
    code: 370000,
    value: 75,
  },
  {
    name: '青海省',
    code: 630000,
    value: 7,
  },
  {
    name: '重庆市',
    code: 500000,
    value: 25,
  },
  {
    name: '福建省',
    code: 350000,
    value: 38,
  },
  {
    name: '湖北省',
    code: 420000,
    value: 48,
  },
  {
    name: '西藏自治区',
    code: 540000,
    value: 0,
  },
  {
    name: '台湾省',
    code: 710000,
    value: null,
  },
];

const DemoChoroplethMap = ({ data }) => {
  const config = {
    map: {
      type: 'mapbox',
      style: 'blank',
      center: [120.19382669582967, 30.258134],
      zoom: 3,
      pitch: 0,
    },
    source: {
      data: data,
      joinBy: {
        sourceField: 'code',
        geoField: 'adcode',
      },
    },
    viewLevel: {
      level: 'country',
      adcode: 100000,
    },
    autoFit: true,
    color: {
      field: 'value',
      value: ['#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70'],
      scale: {
        type: 'quantile',
      },
    },
    style: {
      opacity: 1,
      stroke: '#ccc',
      lineWidth: 0.6,
      lineOpacity: 1,
    },
    label: {
      visible: true,
      field: 'name',
      style: {
        fill: '#000',
        opacity: 0.8,
        fontSize: 10,
        stroke: '#fff',
        strokeWidth: 1.5,
        textAllowOverlap: false,
        padding: [5, 5],
      },
    },
    state: {
      active: {
        stroke: 'black',
        lineWidth: 1,
      },
    },
    tooltip: {
      items: ['name', 'adcode', 'value'],
    },
    zoom: {
      position: 'bottomright',
    },
    legend: {
      position: 'bottomleft',
    },
  };
  return <ChoroplethMap {...config} />;
};

const DemoColumn = () => {
  const [data, setData] = useState([]);

  const dt = [
    {
      product_type: '办公用品',
      sex: '男',
      order_amt: 8,
      product_sub_type: '橡皮擦',
    },
    {
      product_type: '办公用品',
      sex: '男',
      order_amt: 10,
      product_sub_type: '书架',
    },
    {
      product_type: '办公用品',
      sex: '男',
      order_amt: 20,
      product_sub_type: '砚台',
    },
    {
      product_type: '办公用品',
      sex: '女',
      order_amt: 13,
      product_sub_type: '砚台',
    },
    {
      product_type: '办公用品',
      sex: '女',
      order_amt: 21,
      product_sub_type: '橡皮擦',
    },
    {
      product_type: '办公用品',
      sex: '女',
      order_amt: 21,
      product_sub_type: '书架',
    },

    {
      product_type: '家电家具',
      sex: '男',
      order_amt: 13,
      product_sub_type: '洗衣机',
    },
    {
      product_type: '家电家具',
      sex: '女',
      order_amt: 2,
      product_sub_type: '洗衣机',
    },
    {
      product_type: '家电家具',
      sex: '男',
      order_amt: 5,
      product_sub_type: '微波炉',
    },
    {
      product_type: '家电家具',
      sex: '男',
      order_amt: 14,
      product_sub_type: '电磁炉',
    },
    {
      product_type: '家电家具',
      sex: '女',
      order_amt: 23,
      product_sub_type: '微波炉',
    },
    {
      product_type: '家电家具',
      sex: '女',
      order_amt: 23,
      product_sub_type: '电磁炉',
    },

    {
      product_type: '电子产品',
      sex: '男',
      order_amt: 33,
      product_sub_type: '电脑',
    },
    {
      product_type: '电子产品',
      sex: '女',
      order_amt: 4,
      product_sub_type: '电脑',
    },
    {
      product_type: '电子产品',
      sex: '女',
      order_amt: 23,
      product_sub_type: 'switch',
    },
    {
      product_type: '电子产品',
      sex: '男',
      order_amt: 20.9,
      product_sub_type: 'switch',
    },
    {
      product_type: '电子产品',
      sex: '男',
      order_amt: 5.9,
      product_sub_type: '鼠标',
    },
    {
      product_type: '电子产品',
      sex: '女',
      order_amt: 5.9,
      product_sub_type: '鼠标',
    },
  ];

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    // fetch('https://gw.alipayobjects.com/os/antfincdn/mor%26R5yBI9/stack-group-column.json')
    //   .then((response) => response.json())
    //   .then((json) => setData(json))
    //   .catch((error) => {
    //     console.log('fetch data failed', error);
    //   });
    setData(dt);
  };
  const config = {
    data,
    xField: 'product_type',
    yField: 'order_amt',
    isGroup: true,
    isStack: true,
    seriesField: 'product_sub_type',
    groupField: 'sex',
  };

  return <Column {...config} />;
};

const DemoArea = ({ data }) => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   asyncFetch();
  // }, []);

  // const asyncFetch = () => {
  //   fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => {
  //       console.log('fetch data failed', error);
  //     });
  // };
  const config = {
    data,
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      range: [0, 1],
      tickCount: 5,
    },
    areaStyle: () => {
      return {
        fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
      };
    },
  };

  return <Area {...config} />;
};

const DemoAreaMap = () => {
  const [data, setData] = useState({ type: 'FeatureCollection', features: [] });

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/d6da7ac1-8b4f-4a55-93ea-e81aa08f0cf3.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    map: {
      type: 'mapbox',
      style: 'blank',
      center: [120.19382669582967, 30.258134],
      zoom: 3,
      pitch: 0,
    },
    source: {
      data: data,
      parser: {
        type: 'geojson',
      },
    },
    autoFit: true,
    color: {
      field: 'adcode',
      value: [
        'rgb(239,243,255)',
        'rgb(189,215,231)',
        'rgb(107,174,214)',
        'rgb(49,130,189)',
        'rgb(8,81,156)',
      ],
      scale: {
        type: 'quantile',
      },
    },
    style: {
      opacity: 1,
      stroke: 'rgb(93,112,146)',
      lineWidth: 0.6,
      lineOpacity: 1,
    },
    state: {
      active: true,
    },
    label: {
      visible: true,
      field: 'name',
      style: {
        fill: '#000',
        opacity: 0.8,
        fontSize: 10,
        stroke: '#fff',
        strokeWidth: 1.5,
        textAllowOverlap: false,
        padding: [5, 5],
      },
    },
    tooltip: {
      items: ['name', 'adcode'],
    },
    zoom: {
      position: 'bottomright',
    },
    legend: {
      position: 'bottomleft',
    },
  };
  return <AreaMap {...config} />;
};

const DemoPie = ({ data }) => {
  const G = G2.getEngine('canvas');
  const cfg = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.75,
    legend: false,
    label: {
      type: 'spider',
      labelHeight: 40,
      formatter: (data, mappingData) => {
        const group = new G.Group({});
        group.addShape({
          type: 'circle',
          attrs: {
            x: 0,
            y: 0,
            width: 20,
            height: 30,
            r: 5,
            fill: mappingData.color,
          },
        });
        group.addShape({
          type: 'text',
          attrs: {
            x: 10,
            y: 8,
            text: `${data.type}`,
            fill: mappingData.color,
          },
        });
        group.addShape({
          type: 'text',
          attrs: {
            x: 0,
            y: 25,
            text: `${data.value}个 ${(data.percent * 100).toFixed(2)}%`,
            fill: 'rgba(0, 0, 0, 0.65)',
            fontWeight: 700,
          },
        });
        return group;
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
  };
  const config = cfg;
  return <Pie {...config} />;
};

const Dashboard = () => {
  return (
    <PageContainer>
      <Card>
        <Row gutter={[16, 24]}>
          <Col span={8}>
            <Typography.Title level={5}>窃密泄密案例参照级别占比分析</Typography.Title>
            <br />
            <DemoPie data={data_pie1} />
          </Col>
          <Col span={8}>
            <Typography.Title level={5}>窃密泄密案例案件性质占比分析</Typography.Title>
            <br />
            <DemoPie data={data_pie2} />
          </Col>
          {/* <Col span={8}>
          <Typography.Title level={5}>窃密泄密案例审判结果占比分析</Typography.Title>
          <br />
          <DemoPie data={data_pie3}/>
        </Col> */}
          <Col span={8}>
            <Typography.Title level={5}>窃密泄密案例泄密载体占比分析</Typography.Title>
            <br />
            <DemoPie data={data_pie4} />
          </Col>
          <Col span={12}>
            <Typography.Title level={5}>窃密泄密案例行政区域分布</Typography.Title>
            <br />
            <div style={{ height: '450px' }}>
              <DemoChoroplethMap data={data_map} />
            </div>
          </Col>
          {/* </Row>

            <Row gutter={[16, 24]}> */}
          <Col span={12}>
            <Typography.Title level={5}>窃密泄密案例发生时间分析</Typography.Title>
            <br />
            <DemoArea data={data_area} />
          </Col>
          {/* <Col span={12}>
          <Typography.Title level={5}>窃密泄密事件产业行业分布</Typography.Title>
          <br />
          <DemoColumn />
        </Col> */}
        </Row>
      </Card>
    </PageContainer>
  );
};

export default Dashboard;
