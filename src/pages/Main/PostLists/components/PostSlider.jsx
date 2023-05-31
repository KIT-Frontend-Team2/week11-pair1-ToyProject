import { Swiper, SwiperSlide } from 'swiper/react'
import styled from 'styled-components'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper'

const PostSlider = ({ data }) => {
	return (
		<S.Slider>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				pagination={{
					clickable: true,
				}}
				navigation={false}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				{data.map(data => {
					return (
						<SwiperSlide key={Math.floor(Math.random() * 10000)}>
							<img
								src={data.slideImage}
								width={'100%'}
								height={300}
								alt={'사진'}
							/>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</S.Slider>
	)
}

export default PostSlider

const Slider = styled.div`
	width: 100%;
	height: 300px;
	overflow: hidden;
	margin: 5px 0 5px 0;
`
const S = {
	Slider,
}
