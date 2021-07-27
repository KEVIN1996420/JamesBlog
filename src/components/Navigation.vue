<template>
	<header>
		<nav class="container">
			<div class="branding">
				<router-link class="header" :to="{ name : 'Home'}">JamesBlog</router-link>
			</div>
			<div class="nav-links">
				<ul v-show="!mobile">
					<router-link class="link" to="#">Home</router-link>
					<router-link class="link" to="#">Blogs</router-link>
					<router-link class="link" to="#">Create Post</router-link>
					<router-link class="link" to="#">Login/Register</router-link>
				</ul>
			</div>
		</nav>
		<menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile"/>
		<transition name="mobile-nav">
				<ul class="mobile-nav" v-show="mobileNav">
					<router-link class="link" to="#">Home</router-link>
					<router-link class="link" to="#">Blogs</router-link>
					<router-link class="link" to="#">Create Post</router-link>
					<router-link class="link" to="#">Login/Register</router-link>
				</ul>
		</transition>
	</header>
</template>

<script>
	import menuIcon from '../assets/Icons/bars-regular.svg';
	export default {
		name: 'navigation',
		components: {
			menuIcon
		},
		data() {
			return {
				mobile: null,
				mobileNav: null,
				windowWidth: null,
			};
		},
		created(){
			window.addEventListener('resize', this.checkScreen);
			this.checkScreen();
		},
		methods:{
			checkScreen(){
				this.windowWidth = window.innerWidth;
				if(this.windowWidth <= 750){
					this.mobile = true;
					return;
				}
				this.mobile = false;
				this.mobileNav = false;
				return;
			},
			toggleMobileNav(){
				this.mobileNav = !this.mobileNav;
			}
		}
	};
</script>

<style lang='scss' scoped>
header{
	background-color: white;
	padding: 0 25px;
	box-shadow: 0px 0px 8px 0px #888888;
	z-index: 99;

	.link{
		font-weight: 500;
		padding: 0 8px;
		transition: .3s color ease;

		&:hover{
			color: rgb(113, 218, 8);
		}
	}
	nav{
		display: flex;
		padding: 10px 0px;

		.branding {
			display: flex;
			align-items: center;

			.header {
				font-weight: 600px;
				font-size: 24px;
				color: rgb(20, 20, 20);
				text-decoration: none;
				padding-top: 10px;
			}
		}
		.nav-links{
			position: relative;
			display: flex;
			flex: 1;
			align-items: center;
			justify-content: flex-end;

			ul{
				margin: 32px;

				.link{
					margin-right: 32px;
				}
				.link:last-child{
					margin-right: 0;
				}
			}
		}
	}
	.menu-icon{
		cursor: pointer;
		position: absolute;
		top: 32px;
		right: 25px;
		height: 25px;
		width: auto;
	}
	.mobile-nav{
		padding: 0 20px 0px 20px;
		width: 70%;
		max-width: 250px;
		top:0;
		display: flex;
		flex-direction: column;
		position: fixed;
		height: 100%;
		background-color: rgb(40, 41, 40);
		margin-left: -1.6em;

		.link {
			padding: 15px 0px;
			color: white;
		}
	}
	.mobile-nav-enter-active,
	.mobile-nav-leave-active{
		transition: all 1s ease;
	}
	.mobile-nav-enter{
		transform: translateX(-250px);
	}
	.mobile-nav-enter-to{
		transform: translateX(0px);
	}
	.mobile-nav-leave-to{
		transform: translateX(-250px);
	}
}
</style>