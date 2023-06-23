window.config = {
  promptWords: [
    {
      title: `数据分析`,
      content: `请你扮演一位金融分析师，我会给你提供企业的名称以及他们某段时间的财务数据，请依据这些信息，结合你对该公司的了解，为我总结一下他们的财务情况。同期增减比例中出现“+”符号为增加，出现“-”符号为减少。请注意，财务信息不参考已知信息，只参考下面“###”符号之间的数据。该公司信息如下：
  公司名称：宁德时代
  时间：2022年一季度
  ###
  营业总收入约为：486亿元，比上年同期增减比例为：+153.97%；
  净利润约为：14亿元，比上年同期增减比例为：-23.62%；
  总资产约为：3762亿元，比上年同期增减比例为：+22.29%；
  净资产约为：852亿元，比上年同期增减比例为：+0.83%；
  ###
  请直接给出你的分析：`,
    },
    {
      title: `金融实体提取成json`,
      content: `请通过“问”给予的文本，提取关键实体信息，并直接用json格式回答。以下是2个例子，请参考其中的“答”，给出第三个“问”的正确回答。

      问：深城交融资融券信息显示，2023年4月20日融资净偿还9.33万元；融资余额1.32亿元，较前一日下降0.07%。
      融资方面，当日融资买入1123.41万元，融资偿还1132.74万元，融资净偿还9.33万元，连续3日净偿还累计1194.89万元。融券方面，融券卖出7500股，融券偿还8100股，融券余量78.03万股，融券余额2215.33万元。融资融券余额合计1.54亿元。
      
      答：{“个股名称”:“深城交”, “融资买入”:“1123.41万元”, “融资余额”:“1.32亿元”, “融券卖出”:“7500股”, “融券偿还”:“8100股”, “融券余量”:“78.03万股”}
      
      问：宏达股份：连续3日融资净买入累计1464.34万元（04-12）
      2023年4月12日宏达股份连续3日融资净买入累计1464.34万元
      宏达股份融资融券信息显示，2023年4月12日融资净买入959.24万元；融资余额1.96亿元，较前一日增加5.15%。
      融资方面，当日融资买入1831.24万元，融资偿还872万元，融资净买入959.24万元，连续3日净买入累计1464.34万元。融券方面，融券卖出0股，融券偿还1.66万股，融券余量38.3万股，融券余额135.19万元。融资融券余额合计1.97亿元。
      
      答：{“个股名称”:“宏达股份”, “融资买入”:“1831.24万元”, “融资余额”:“1.96亿元”, “融券卖出”:“0股”, “融券偿还”:“1.66万股”, “融券余量”:“38.3万股”}
      
      问：广电网络：融资净偿还309.08万元，融资余额2.7亿元（05-07）
      2021年5月7日广电网络融资净偿还309.08万元，融资余额2.7亿元
      广电网络融资融券信息显示，2021年5月7日融资净偿还309.08万元；融资余额2.7亿元，较前一日下降1.13%
      融资方面，当日融资买入337.02万元，融资偿还646.09万元，融资净偿还309.08万元。融券方面，融券卖出0股，融券偿还0股，融券余量2.24万股，融券余额12.58万元。融资融券余额合计2.7亿元。
      
      你需要提取个股名称、融资买入、融资余额、融券卖出、融券偿还、融券余量、融券余额相关的信息。
      答：`,
    },
  ],
};
