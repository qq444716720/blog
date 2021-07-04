import React from "react"

import Layout from '../components/Layout'

import './links.less'

const data = [{
  title: 'RegExr: Learn, Build, & Test RegEx',
  url: 'https://regexr.com/',
  icon: 'regexr.ico',
  backgroundImg: 'regexr2.png',
  description: 'Regular expression tester with syntax highlighting, PHP / PCRE & JS Support, contextual help, cheat sheet, reference, and searchable community patterns.',
}, {
  title: 'Free Lottie Animation Files, Tools & Plugins - LottieFiles',
  url: 'https://lottiefiles.com/',
  icon: 'lottie.png',
  backgroundImg: 'lottie2.png',
  description: "The world's largest online platform for the world's smallest animation format for designers, developers, and more. Access Lottie animation tools and plugins for Android, iOS, and Web.",
}, {
  title: 'CodePen',
  url: 'https://codepen.io/',
  icon: 'codepen.png',
  backgroundImg: 'codepen2.png',
  description: "An online code editor, learning environment, and community for front-end web development using HTML, CSS and JavaScript code snippets, projects, and web applications.",
}, {
  title: '图标工场 - 移动应用图标/启动图生成工具，一键生成所有尺寸的应用图标/启动图',
  url: 'https://icon.wuruihong.com/',
  icon: 'wuruihong.ico',
  backgroundImg: 'wuruihong2.png',
  description: "一键快速生成iOS, Android，Web App, PhoneGap(Cordova)等移动平台不同大小(规格尺寸)的App图标和Launch Image/Splash Screen启动图，快速预览，可以直接打包发布到应用市场",
}, {
  title: 'TinyPNG - Compress PNG images while preserving transparency',
  url: 'https://tinypng.com/',
  icon: 'tynypng.ico',
  backgroundImg: 'tynypng2.jpg',
  description: "Excellent question! Let me give you a side by side comparison. Below are two photos of my cousin. The left image is saved as 24-bit PNG directly from Adobe Photoshop. On the right is the same image processed by TinyPNG. Spot any difference? Excellent question!",
}, {
  title: 'iconfont-阿里巴巴矢量图标库',
  url: 'https://www.iconfont.cn/',
  icon: 'iconfont.ico',
  backgroundImg: 'iconfont2.png',
  description: "iconfont-国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能。阿里巴巴体验团队倾力打造，设计和前端开发的便捷工具",
}, {
  title: 'SVG在线压缩合并工具',
  url: 'https://www.zhangxinxu.com/sp/svgo/',
  icon: 'xin.ico',
  backgroundImg: '',
  description: "SVG在线压缩合并工具，支持拖拽上传，剪切板上传，支持批量压缩，支持CSS内联转义",
}, {
  title: 'Can I use... Support tables for HTML5, CSS3, etc',
  url: 'https://www.caniuse.com/',
  icon: 'caniuse.png',
  backgroundImg: '',
  description: "Test a feature Our partnership with BrowserStack now lets you test your website for compatibility across 2,000+ real browsers and devices. Test on: Did you know? Next If a feature you're looking for is not available on the site, you can vote to have it included.",
}, {
  title: 'DeepL Translate',
  url: 'https://www.deepl.com/',
  icon: 'deepl.png',
  backgroundImg: 'deepl2.png',
  description: "Use the free DeepL Translator to translate your texts with the best machine translation available, powered by DeepL's world-leading neural network technology. Currently supported languages are: Bulgarian, Chinese, Czech, Danish, Dutch, English, Estonian, Finnish, French, German, Greek, Hungarian, Italian, Japanese, Latvian, Lithuanian, Polish, Portuguese, Romanian, Russian, Slovak, Slovenian, Spanish, and Swedish.",
}, {
  title: 'ByteDance IconPark',
  url: 'https://iconpark.oceanengine.com/',
  icon: 'deepl.png',
  description: 'IconPark, park your icon. Made by ByteDance'
},
{
  title: 'PNG images | 100 000+ Free PNG images',
  url: 'http://pngimg.com/',
  icon: 'pngimg.png',
  description: 'The largest FREE transparent PNG images clipart catalog for design and web design in best resolution and quality'
},
{
  title: '包小盒 - 在线3D包装设计工具_包装设计_印刷定制_渲染效果',
  url: 'https://www.baoxiaohe.com/',
  icon: '',
  backgroundImg: 'baoxiaohe2.png',
  description: '包小盒是免费在线的在线包装印刷设计工具,所见即所得,可实现3D云渲染效果预览分享,提供免费纸箱彩盒模型和设计模板,在线云印刷打样,海量图片素材等功能。制作包装盒不求人处理简单易用,这款在线包装编辑软件让设计盒型模板图片更轻松,帮助企业视觉包装营销投入成本更低。'
},
{
  title: 'Free Icons, Clipart Illustrations, Photos, and Music',
  url: 'https://icons8.com/',
  icon: 'icons8.png',
  backgroundImg: 'icons82.png',
  description: 'Download design elements for free: icons, photos, vector illustrations, and music for your videos. All the assets made by designers → consistent quality ⚡️'
},
{
  title: '爱给网_音效配乐_3D模型_视频素材_游戏素材_免费下载',
  url: 'https://www.aigei.com/',
  icon: 'aigei.ico',
  description: '中国最大的数字娱乐免费素材下载网站,免费提供免费的音效配乐|3D模型|视频|游戏素材资源下载。'
},
{
  title: 'Excalidraw',
  url: 'https://excalidraw.com/',
  icon: 'excaildraw.ico',
  backgroundImg: 'excaildraw2.png',
  description: 'Excalidraw is a virtual collaborative whiteboard tool that lets you easily sketch diagrams that have a hand-drawn feel to them.'
},
{
  title: '友盟+，国内领先的第三方全域数据智能服务商',
  url: 'https://www.umeng.com/',
  icon: 'umeng.ico',
  backgroundImg: 'umeng2.jpg',
  description: '友盟+，国内领先的第三方全域数据智能服务商。专注为互联网企业提供一站式数据分析运营服务近10年。截至2020年已累计服务200万移动应用和890万家网站19年友盟+数据智能服务战略升级，重磅发布友盟云'
},
{
  title: 'Indify - Notion Widgets',
  url: 'https://www.indify.co/',
  icon: 'indify.svg',
  backgroundImg: 'indify2.png',
  description: 'Level up your Notion docs with widgets. Fully customizable, and seamless to set up.'
},
{
  title: 'Download 3M+ Icons, 3D Illustrations & Lottie Animations | Iconscout',
  url: 'https://iconscout.com/',
  icon: 'iconsout.ico',
  backgroundImg: 'iconsout2.png',
  description: 'Curated SVGs, Vector Icons, Illustrations, 3D graphics, and Lottie Animations. Curated SVGs, Vector Icons, Illustrations, 3D graphics, and Lottie Animations. Over 3000+ assets added every day. Integrated plugins, tools, editors, and more.'
}]

const LinkPage = () => {

  return (
    <Layout isHome>
      <div className="links-page">
        <iframe
          title=""
          style={{ width: '100%', height: 250 }}
          src="https://www.indify.co/widgets/live/weather/Tb34i4jGyooLEyJVNA4b"
          frameborder="0"
        />
        {
          data.map(({ title, url, description, icon, backgroundImg }) => (
            <a href={url} rel="noopener noreferrer" target="_blank" style={{ margin: 10 }}>
              <div className="wrap">
                <div className="left">
                  <div className="title">{title}</div>
                  <div className="desc">{description}</div>
                  <div className="bottom">
                    {
                      icon &&
                      <img src={require(`../images/links/${icon}`)} alt="" />
                    }
                    <div className="link">
                      {url}
                    </div>
                  </div>
                </div>
                {
                  backgroundImg &&
                  <div className="right">
                    <div style={{
                      position: 'absolute',
                      inset: '0px',
                    }}>
                      <div style={{
                        width: '100%',
                        height: '100%',
                      }}>
                        <img src={require(`../images/links/${backgroundImg}`)} alt="" />
                      </div>
                    </div>
                  </div>
                }
              </div>
            </a>
          ))
        }
      </div>
    </Layout>
  )
}

export default LinkPage
