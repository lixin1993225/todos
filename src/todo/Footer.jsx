import '../assets/styles/footer.styl'

export default {
	data(){
		return {
			author:'itPoet',
			blog:'hahah'
		}
	},
	render(){
		return (
            <div id="footer">
                <span>Power by {this.author}，欢迎访问作者博客：{this.blog}</span>
                <br/>
                <span>Hosted by Coding Pages</span>
            </div>
		)
	}
}