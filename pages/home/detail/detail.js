// pages/home/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageWidth: wx.getSystemInfoSync().windowWidth,
    imgUrls: [
      { route: '../../../imgs/fzu01.jpg' },
      { route: '../../../imgs/xmu.jpg' },
      { route: '../../../imgs/jmu01.jpg' }
    ],
    interval: 3000,
    duration: 1000,
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    colleges:[
      {name:"计算机工程学院"},
      { name: "计算机工程学院" },
      { name: "计算机工程学院" },
      { name: "计算机工程学院" },
      { name: "计算机工程学院" },
      { name: "计算机工程学院" },
      { name: "计算机工程学院" },
    ],
    school: "厦门大学（Xiamen University），简称厦大（XMU），由著名爱国华侨领袖陈嘉庚先生于1921年创办，是中国近代教育史上第一所华侨创办的大学，也是国家“211工程”和“985工程”重点建设的高水平大学。\n建校以来，学校秉承“自强不息，止于至善”的校训，积累了丰富的办学经验，形成了鲜明的办学特色，成为一所学科门类齐全、师资力量雄厚、居国内一流、在国际上有广泛影响的综合性大学。建校迄今，已先后为国家培养了30多万名本科生和研究生，在厦大学习、工作过的两院院士达60多人。\n\n学校设有研究生院、6个学部以及28个学院（含76个系）和14个研究院，形成了包括人文科学、社会科学、自然科学、工程与技术科学、管理科学、艺术科学、医学科学等学科门类在内的完备学科体系。学校现有11个学科进入ESI全球前1%，拥有5个一级学科国家重点学科、9个二级学科国家重点学科、17个一级学科福建省特色重点学科、46个福建省一级学科重点学科，9个国家基础科学人才培养基地。拥有31个博士后流动站；31个博士学位授权一级学科，5个博士学位授权二级学科；50个硕士学位授权一级学科，5个硕士学位授权二级学科；9个交叉学科；24个专业学位学科授权。\n学校现有专任教师2718人，其中，教授、副教授1826人，占专任教师总数的67.0%（下同），拥有博士学位的2078人，占76.5%。\n\n学校共有两院院士21人（含双聘院士9人），文科资深教授2人，国家重点基础研究发展计划（简称973计划，含重大科学研究计划）首席科学家10人次，国家级有突出贡献的专家18人，海外高层次人才引进计划（“千人计划”）入选者69人（含“千人计划”青年人才34人），“长江学者”特聘教授21人、讲座教授16人、青年学者1人，国家杰出青年科学基金获得者40人，国家级教学名师6人，国家高层次人才特殊支持计划（“万人计划”）科技创新领军人才8人、哲学社会科学领军人才3人、教学名师1人、百千万工程领军人才1人、青年拔尖人才6人，国家“百千万人才工程”入选者19人，国家优秀青年科学基金获得者26人，教育部“新（跨）世纪优秀人才培养计划”入选者140人；国家基金委创新研究群体6个，教育部创新团队9个，高等学校学科创新引智基地（“111计划”）7个。\n\n学校现有在校学生近40000余人（含外国学历留学生1196人），其中本科生19782人，硕士研究生16390人，博士研究生3229人，本研比约为1: 1。学校获第五、六、七届国家级高等教育教学成果一等奖3项、二等奖17项，名列全国高校前茅；30门课程入选全国“精品课程”，6个国家级实验教学示范中心；12篇论文入选“全国百篇优秀博士学位论文”。厦大毕业生是最受社会欢迎的群体之一，年均就业率保持在95%以上。\n\n学校设有200多个研究机构，其中国家级协同创新中心2个（牵头单位），国家重点实验室4个，国家工程实验室1个，国家工程技术研究中心1个，国家地方联合工程实验室3个，教育部重点实验室5个，教育部工程研究中心3个，教育部人文社科重点研究基地5个。厦门大学国家大学科技园是福建省内仅有的两个经科技部、教育部认定的国家级大学科技园之一。“十二五”期间，学校自然科学科研实力大幅提升，在《科学》、《自然》、《细胞》及其子刊等国际高水平学术期刊上发表论文50余篇；获国家自然科学二等奖4项、国际科学技术合作奖1项；1项成果入选“中国科学十大进展”，2项成果入选“中国高校十大科技进展”，1项成果获中国专利金奖。学校人文社会学科研究实力雄厚，“十二五”期间共承担国家社科基金重大项目17项，教育部哲社研究重大课题攻关项目10项；32项成果获教育部第六届、第七届高等学校科学研究优秀成果奖（人文社会科学），其中一等奖3项；厦门大学在台湾研究、南洋研究、高教研究、经济研究、会计研究、南海研究等领域已经形成自身特色，实力居国内高校前列。2016年，学校科研经费突破11亿元。\n\n学校对外交流与合作深入开展，已与境外300多所高校签署了校际合作协议，与47所世界排名前200名的高校开展实质性交流合作。积极参与汉语国际推广工作，已与北美洲、欧洲、亚洲、非洲等地区的大学合作建立了16所孔子学院，并获批建设“孔子学院院长学院”。在对台交流方面，学校具有得天独厚的地理条件和难以替代的人文优势，已成为台湾研究的重镇和两岸学术、文化交流的前沿。2014年7月，厦门大学马来西亚分校奠基，成为中国首个在海外建设独立校园的大学；2016年2月，分校举行首批新生开学典礼；分校现已开设12个专业，有在校生1340人、教职员工120多人，获准设立“福建省政府奖学金”。厦门大学马来西亚分校被中央媒体誉为镶嵌在“一带一路”上的一颗明珠，并写入中马联合新闻声明。\n\n学校拥有完善的教学、科研设备和公共服务体系。目前学校占地9000多亩，其中思明校区2600多亩、漳州校区2500多亩、翔安校区3600多亩、马来西亚分校约900亩，校舍建筑总面积210多万平方米。学校拥有纸质图书馆藏410多万册、电子图书490多万册，固定资产总值91亿元，仪器设备总值28亿元；拥有8家附属医院。校园高速信息网络建设的规模、水平居全国高校前列并成为CERNET2的核心节点之一。厦大校园依山傍海、风光秀丽，已成为公认的环境最优美的中国大学校园之一。\n\n中共厦门大学第十次代表大会确定了厦门大学今后一段时期发展的总体战略目标：在建校一百年时全面建成世界知名高水平研究型大学，在新中国成立一百年时跻身世界一流大学行列。目前，厦门大学正昂首阔步朝着既定的奋斗目标阔步迈进",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },

  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})