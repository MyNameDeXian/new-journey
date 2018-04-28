// 学习 公共页 learns index
import React 	from 'react'
import Header 	from 'components/Header'

const web = '/web';
const LearnHeader = () =>(
	<Header>
		<Header.Item type={web + '/html'}  path='/HtmlTag' title='HTML'/>
		<Header.Item type={web + '/css'}   path='/style'  title='CSS'/>
		<Header.Item type={web + '/javaScript'}  path='/GlobalsApi' title='JavaScript'/>
		<Header.Item type={web + '/jsType'}   path='/array' title='JS数据类型'/>
		<Header.Item type={web + '/webpack'}  path='/webpack' title='Webpack'/>
		<Header.Item type={web + '/react'}  path='/React' title='React'/>
		<Header.Item type={web + '/vue'}    path='/Vue' title='Vue'/>
	</Header>
)
export default (props) =>(
	<div className='flex-col' style={{'height': '100%'}}>
		<LearnHeader />
		{ props.children }
	</div>
)