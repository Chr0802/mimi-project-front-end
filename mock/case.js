const getCases = (req, res) => {
  const listData = [];
  for (let i = 0; i < 23; i++) {
    listData.push({
      id: `1000${i}`,
      title: `带走老东家“高新机密” 技术骨干获刑判赔20万${i}`,
      viewNum: '778',
      content: [
        '本报讯（记者孙珺 通讯员褚家威）昨天，全省打击侵权假冒工作电视电话会议披露了2015年武汉市保护知识产权十大典型案件。其中，高新技术商业秘密侵权因案件侦查取证难度大、经济损失的确定颇具争议等成为焦点。',
        '武汉市商务局介绍，武汉一家高新技术企业生产的“格雷母线定位设备”广泛用于钢铁、港口等行业。杨某和闫某原分别为该公司销售经理和技术骨干，两人2012年相继离职后，利用曾经工作期间获得的技术以及掌握的销售渠道，组织生产并交货46套“格雷母线定位设备”，合同总价款460余万元，收到货款近200万元。两人因侵犯商业秘密行为造成原供职公司160余万元经济损失。',
        '经过不公开开庭审理，去年，武汉市江岸区人民法院以侵犯商业秘密罪判处被告人杨某有期徒刑一年三个月，缓刑二年，并处罚金人民币25万元；以侵犯商业秘密罪判处被告人闫某有期徒刑一年，缓刑一年六个月，并处罚金人民币20万元。',
      ],
      year: '2016',
      location: '湖北',
      industry: '(C)制造业-->(36)专用设备制造业',
      category: ['技术信息', '经营信息'],
      form: '记忆',
      nature: '故意',
      infringer: '内部涉密人员',
      method: '自盗',
      purpose: '跳槽',
      people: '洪某某，王某某',
      org: 'wdnshakc co.',
      law: 'law no.1',
    });
  }
  res.json({
    data: listData,
  });
};

const getCaseDetail = (req, res) => {
  const id = req.query.caseId;
  console.log(id);
  res.json({
    id: id,
    title: `带走老东家“高新机密” 技术骨干获刑判赔20万${id}`,
    viewNum: '778',
    content: [
      '本报讯（记者孙珺 通讯员褚家威）昨天，全省打击侵权假冒工作电视电话会议披露了2015年武汉市保护知识产权十大典型案件。其中，高新技术商业秘密侵权因案件侦查取证难度大、经济损失的确定颇具争议等成为焦点。',
      '武汉市商务局介绍，武汉一家高新技术企业生产的“格雷母线定位设备”广泛用于钢铁、港口等行业。杨某和闫某原分别为该公司销售经理和技术骨干，两人2012年相继离职后，利用曾经工作期间获得的技术以及掌握的销售渠道，组织生产并交货46套“格雷母线定位设备”，合同总价款460余万元，收到货款近200万元。两人因侵犯商业秘密行为造成原供职公司160余万元经济损失。',
      '经过不公开开庭审理，去年，武汉市江岸区人民法院以侵犯商业秘密罪判处被告人杨某有期徒刑一年三个月，缓刑二年，并处罚金人民币25万元；以侵犯商业秘密罪判处被告人闫某有期徒刑一年，缓刑一年六个月，并处罚金人民币20万元。',
    ],
    year: '2016',
    location: '湖北',
    industry: '(C)制造业-->(36)专用设备制造业',
    category: ['技术信息', '经营信息'],
    form: '记忆',
    nature: '故意',
    infringer: '内部涉密人员',
    method: '自盗',
    purpose: '跳槽',
    people: '洪某某，王某某',
    org: 'wdnshakc co.',
    law: 'law no.1',
  });
};

const getSiZhi = (req, res) => {
  const wd = req.query.wd;
  console.log(wd);
  const data = {
    categories: {
      cate1: '类别1',
      cate2: '类别2',
    },
    nodes: [
      {
        label: '泄密事件',
        value: 20,
        id: '1',
        categories: ['cate1'],
        info: '泄密事件，是指违反保密法律法规，使国家秘密被不应知悉者知悉，或者超出限定的接触范围，而不能证明未被不应知悉者知悉的事件。',
      },
      {
        label: '泄密事件',
        value: 10,
        id: '2',
        categories: ['cate2'],
        info: '泄密事件',
      },
      {
        label: '指违反保密法律法规',
        value: 10,
        id: '3',
        categories: ['cate2'],
        info: '指违反保密法律法规',
      },
      {
        label: '超出限定',
        value: 10,
        id: '4',
        categories: ['cate2'],
        info: '超出限定',
      },
      {
        label: '事件',
        value: 10,
        id: '5',
        categories: ['cate2'],
        info: '事件',
      },
    ],
    edges: [
      {
        id: '1002',
        label: '中文名',
        source: '1',
        target: '2',
      },
      {
        id: '1003',
        label: '定义',
        source: '1',
        target: '3',
      },
      {
        id: '1004',
        label: '范围',
        source: '1',
        target: '4',
      },
      {
        id: '1005',
        label: '类别',
        source: '1',
        target: '5',
      },
    ],
  };

  // setTimeout(() => {
  //   res.json({
  //     nodes: [
  //       {
  //         id: '001',
  //         label: 'bob',
  //         type: 'man'
  //       },
  //       {
  //         id: '002',
  //         label: 'alice',
  //         type: 'woman'
  //       },
  //       {
  //         id: '003',
  //         label: 'mike',
  //         type: 'man'
  //       },
  //     ],
  //     edges: [
  //       {
  //         source: '001',
  //         target: '002',
  //         label: 'wife'
  //       },
  //       {
  //         source: '001',
  //         target: '003',
  //         label: 'son'
  //       },
  //       {
  //         source: '003',
  //         target: '002',
  //         label: 'mother'
  //       },
  //     ]
  //   })
  // }, 1000);
  res.json(data);
};

const getCaseGraph = (req, res) => {
  const id = req.query.caseId;
  console.log(id);
  let data = {
    categories: {
      time: '时间',
      loc: '地点',
      industry: '涉及行业',
      cate: '商业秘密类别',
      carrier: '载体形式',
      nature: '性质',
      pro: '侵权人属性',
      way: '侵权方式',
      aim: '侵权目的',
      event: '事件',
      people: '涉案人员',
      org: '组织机构',
      law: '法律条款',
      article: '正文',
    },
    nodes: [
      { id: 0, label: 2016, group: 'time' },
      { id: 1, label: '四川', group: 'loc' },
      { id: 2, label: '(C)制造业-->(36)专用设备制造业', group: 'industry' },
      { id: 3, label: '技术信息,经营信息', group: 'cate' },
      { id: 4, label: '电子, 记忆', group: 'carrier' },
      { id: 5, label: '故意', group: 'nature' },
      { id: 6, label: '内部涉密人员', group: 'pro' },
      { id: 7, label: '自盗', group: 'way' },
      { id: 8, label: '跳槽', group: 'aim' },
      { id: 9, label: '重庆破侵犯商业秘密案 涉案总额超千万元', group: 'event' },
      { id: 10, label: '夏某某，郑某某，唐某某', group: 'people' },
      { id: 11, label: '重庆某净化设备有限公司', group: 'org' },
      { id: 12, label: '无', group: 'law' },
    ],
    edges: [
      { source: 9, target: 0, label: '时间' },
      { source: 9, target: 1, label: '地点' },
      { source: 9, target: 2, label: '涉及行业' },
      { source: 9, target: 3, label: '商业秘密类别' },
      { source: 9, target: 4, label: '载体形式' },
      { source: 9, target: 5, label: '性质' },
      { source: 9, target: 6, label: '侵权人属性' },
      { source: 9, target: 7, label: '侵权方式' },
      { source: 9, target: 8, label: '侵权目的' },
      { source: 9, target: 10, label: '涉案人员' },
      { source: 9, target: 11, label: '组织机构' },
      { source: 9, target: 12, label: '法律条款' },
    ],
  };
  // res.json({
  //     "nodes": [
  //       {
  //         "id": "node-0",
  //         "x": 100,
  //         "y": 100,
  //         "data": {
  //           "type": "user"
  //         },
  //         "style": {
  //           "label": {
  //             "value": "node-0"
  //           },
  //           "keyshape": {
  //             "size": 30,
  //             "stroke": "#FF6A00",
  //             "fill": "#FF6A00",
  //             "fillOpacity": 0.2,
  //             "strokeOpacity": 1
  //           },
  //           "icon": {
  //             "type": "font",
  //             "value": "",
  //             "size": 15,
  //             "fill": "#FF6A00",
  //             "fontFamily": "graphin"
  //           }
  //         }
  //       },
  //       {
  //         "id": "node-1",
  //         "x": 200,
  //         "y": 200,
  //         "data": {
  //           "type": "company",
  //           "count": 300
  //         },
  //         "style": {
  //           "label": {
  //             "value": "node-1"
  //           },
  //           "keyshape": {
  //             "size": 60,
  //             "stroke": "#46a7a6",
  //             "fill": "#46a7a6",
  //             "fillOpacity": 0.2,
  //             "strokeOpacity": 1
  //           },
  //           "icon": {
  //             "type": "font",
  //             "value": "",
  //             "size": 30,
  //             "fill": "#46a7a6",
  //             "fontFamily": "graphin"
  //           }
  //         }
  //       },
  //       {
  //         "id": "node-2",
  //         "x": 100,
  //         "y": 300,
  //         "data": {
  //           "type": "company",
  //           "count": 200
  //         },
  //         "style": {
  //           "label": {
  //             "value": "node-2"
  //           },
  //           "keyshape": {
  //             "size": 40,
  //             "stroke": "#46a7a6",
  //             "fill": "#46a7a6",
  //             "fillOpacity": 0.2,
  //             "strokeOpacity": 1
  //           },
  //           "icon": {
  //             "type": "font",
  //             "value": "",
  //             "size": 20,
  //             "fill": "#46a7a6",
  //             "fontFamily": "graphin"
  //           }
  //         }
  //       }
  //     ],
  //     "edges": [
  //       {
  //         "source": "node-0",
  //         "target": "node-1"
  //       },
  //       {
  //         "source": "node-0",
  //         "target": "node-2",
  //         "style": {
  //           "keyshape": {
  //             "lineDash": [
  //               2,
  //               2
  //             ],
  //             "stroke": "#FF6A00"
  //           },
  //           "label": {
  //             "value": "实际控制人",
  //             "fill": "#FF6A00"
  //           }
  //         }
  //       }
  //     ]
  //   })
  res.json(data);
};

export default {
  'GET /api/cases': getCases,
  'GET /api/caseGraph': getCaseGraph,
  'GET /api/caseDetail': getCaseDetail,
  'GET /api/sizhi': getSiZhi,
};
