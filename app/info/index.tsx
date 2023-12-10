import React from 'react';
import { Text, View, TouchableHighlight, useWindowDimensions, StatusBar, Image } from 'react-native';
import Animated, { withTiming, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Info = () => {

	const skip = () => {
		setCurrent(content.length -1);
	};

	const {width} = useWindowDimensions();
	const [current, setCurrent] = React.useState(0);

	const content = [
		{
			content: (
				<View className='bg-[#010002] '>
					<StatusBar  backgroundColor='#010002' />
					<View className=' flex flex-row items-center absolute top-[60px] px-4 space-x-4'>
						<Image className='w-[25px] h-[30px]' source={require('../../assets/images/revolut-black.png')} />
						<Text className='text-white text-[18px] font-medium'>Welcome to flex</Text>
					</View>
					<View className='flex flex-col h-screen justify-between z-0 px-5 pt-32'>
						<Text className='text-white text-[35px]' style={{fontFamily: 'Satoshi'}}>Upgrading the way you money</Text>
						<View className='flex flex-row justify-end space-x-4 pr-3'>

						</View>
					</View>
					<View className='h-screen'></View>
				</View>
			),
			finish: 0,
		},
		{
			content: (
				<View className='bg-[#0E65E7]'>
					<StatusBar  backgroundColor='#0E65E7' />
					<View className=' flex flex-row items-center absolute top-[60px] px-4 space-x-4'>
						<Image className='w-[25px] h-[30px]' source={require('../../assets/images/revolut-blue2.png')} />
						<Text className='text-white text-[18px] font-medium'>Welcome to flex</Text>
					</View>
					<View className='flex flex-col h-screen justify-between z-0 px-5 pt-32'>
						<Text className='text-white text-[35px]' style={{fontFamily: 'Satoshi'}}>Managing money is easy with Flex</Text>
						<View className='flex flex-row justify-center'>
							<Image className='h-[310px] w-[250px] rounded-xl -translate-y-5' source={require('../../assets/images/slide0.png')} />
						</View>
						<View className='flex flex-row justify-end space-x-4 pr-3'>
						</View>
					</View>
					<View className='h-screen'></View>
				</View>
			),
			finish: 0,
		},
		{
			content: (
				<View className='bg-[#7E4BF0]'>
					<StatusBar  backgroundColor='#7E4BF0' />
					<View className=' flex flex-row items-center absolute top-[60px] px-4 space-x-4'>
						<Image className='w-[25px] h-[30px]' source={require('../../assets/images/revolut-purple.png')} />
						<Text className='text-white text-[18px] font-medium'>Welcome to flex</Text>
					</View>
					<View className='flex flex-col h-screen justify-between z-0 px-5 pt-32'>
						<Text className='text-white text-[35px]' style={{fontFamily: 'Satoshi'}}>Control your wallet security in app</Text>
						<View className='flex flex-row justify-center'>
							<Image className='h-[310px] w-[250px] rounded-xl -translate-y-5' source={require('../../assets/images/slide1.png')} />
						</View>
						<View className='flex flex-row justify-end space-x-4 pr-3'>
						</View>
					</View>
					<View className='h-screen'></View>
				</View>
			),
			finish: 0,
		},
		{
			content: (
				<View className='bg-[#0C80F7]'>
					<StatusBar  backgroundColor='#0C80F7' />
					<View className=' flex flex-row items-center absolute top-[60px] px-4 space-x-4'>
						<Image className='w-[25px] h-[30px]' source={require('../../assets/images/revolut-blue1.png')} />
						<Text className='text-white text-[18px] font-medium'>Welcome to flex</Text>
					</View>
					<View className='flex flex-col h-screen justify-between z-0 px-5 pt-32'>
						<Text className='text-white text-[35px]' style={{fontFamily: 'Satoshi'}}>Send cash anywhere, hassle-free</Text>
						<View className='flex flex-row justify-center'>
							<Image className='h-[310px] w-[250px] rounded-xl -translate-y-5' source={require('../../assets/images/slide2.png')} />
						</View>
						<View className='flex flex-row justify-end space-x-4 pr-3'>
						</View>
					</View>
					<View className='h-screen'></View>
				</View>
			),
			finish: 0,
		},
		{
			content: (
				<View className='bg-[#0C80F7]'>
					<StatusBar  backgroundColor='#0C80F7' />
					<View className=' flex flex-row items-center absolute top-[60px] px-4 space-x-4'>
						<Image className='w-[25px] h-[30px]' source={require('../../assets/images/revolut-blue1.png')} />
						<Text className='text-white text-[18px] font-medium'>Welcome to flex</Text>
					</View>
					<View className='flex flex-col h-screen justify-between z-0 px-5 pt-32'>
						<Text className='text-white text-[35px]' style={{fontFamily: 'Satoshi'}}>Hold digital assets and tokens</Text>
						<View className='flex flex-row justify-center'>
							<Image className='h-[310px] w-[250px] rounded-xl -translate-y-5' source={require('../../assets/images/slide3.png')} />
						</View>
						<View className='`flex flex-row justify-end space-x-4 pr-3'>
						</View>
					</View>
					<View className='h-screen'></View>
				</View>
			),
			finish: 0,
		},
		{
			content: (
				<View className='bg-[#7E4BF0]'>
					<StatusBar  backgroundColor='#7E4BF0' />
					<View className=' flex flex-row items-center absolute top-[60px] px-4 space-x-4'>
						<Image className='w-[25px] h-[30px]' source={require('../../assets/images/revolut-purple.png')} />
						<Text className='text-white text-[18px] font-medium'>Welcome to flex</Text>
					</View>
					<View className='flex flex-col h-screen justify-between z-0 px-5 pt-32'>
						<Text className='text-white text-[35px]' style={{fontFamily: 'Satoshi'}}>Be in full control of your money</Text>
						<View className='flex flex-row justify-center'>
							<Image className='h-[310px] w-[250px] rounded-xl -translate-y-5' source={require('../../assets/images/slide4.png')} />
						</View>
						<View className='flex flex-row justify-end space-x-4 pr-3'>
						</View>
					</View>
					<View className='h-screen'></View>
				</View>
			),
			finish: 0,
		},
		{
			content: (
				<View className='bg-[#7E4BF0]'>
					<StatusBar  backgroundColor='#7E4BF0' />
					<View className=' flex flex-row items-center absolute top-[60px] px-4 space-x-4'>
						<Image className='w-[25px] h-[30px]' source={require('../../assets/images/revolut-purple.png')} />
						<Text className='text-white text-[18px] font-medium'>Welcome to flex</Text>
					</View>
					<View className='flex flex-col h-screen justify-between z-0 px-5 pt-32'>
						<Text className='text-white text-[35px]' style={{fontFamily: 'Satoshi'}}>Intelligent AI based budgeting</Text>
						<View className='flex flex-row justify-center'>
							<Image className='h-[310px] w-[250px] rounded-xl -translate-y-5' source={require('../../assets/images/slide5.png')} />
						</View>
						<View className='flex flex-row justify-end space-x-4 pr-3'>
						</View>
					</View>
					<View className='h-screen'></View>
				</View>
			),
			finish: 0,
		},
		{
			content: (
				<View className='bg-[#0E65E7]'>
					<StatusBar  backgroundColor='#0E65E7' />
					<View className=' flex flex-row items-center absolute top-[60px] px-4 space-x-4'>
						<Image className='w-[25px] h-[30px]' source={require('../../assets/images/revolut-blue2.png')} />
						<Text className='text-white text-[18px] font-medium'>Welcome to flex</Text>
					</View>
					<View className='flex flex-col h-screen justify-between z-0 px-5 pt-32'>
						<Text className='text-white text-[35px]' style={{fontFamily: 'Satoshi'}}>Making payments fast & seamless</Text>
						<View className='flex flex-row justify-center'>
							<Image className='h-[310px] w-[250px] rounded-xl -translate-y-5' source={require('../../assets/images/slide6.png')} />
						</View>
						<View className='flex flex-row justify-between space-x-4 pr-3'>
							<View className='w-1/2 py-[14px] rounded-3xl bg-[#191B1E] flex flex-row justify-center'>
								<Text className='text-white text-[16px]' style={{fontFamily: 'Satoshi'}}>Login</Text>
							</View>
							<View className='w-1/2 py-[14px] rounded-3xl bg-[#FEFFFE] flex flex-row justify-center'>
								<Text className='text-black text-[16px]' style={{fontFamily: 'Satoshi'}}>Sign Up</Text>
							</View>
						</View>
					</View>
					<View className='h-screen'></View>
				</View>
			),
			finish: 0,
		},
	];


	React.useEffect(() => {
		const timer = setTimeout(() => {
			if(current !== content.length -1){
				setCurrent((prevIndex) => (prevIndex + 1) % content.length);
			}
		}, 5000);
	
		return () => clearTimeout(timer);  // Clear the timer on unmount or when currentIndex changes
	}, [current]);
  
	React.useEffect(() => {
		animatedWidth.value = 0;
		animatedWidth.value = withTiming(100, { duration: 5000 });
	}, [current]);
    

	const increaseCounter = async () => {
		let updatedCurrent = current;
		if(current === content.length - 1){
			updatedCurrent = current;
		}else{
			updatedCurrent = current + 1;
			setCurrent(updatedCurrent);
		}
	};
    
	const decreaseCounter = async () => {
		animatedWidth.value = 0;
		let updatedCurrent = current;
		if(current === 0 ){
			updatedCurrent = content.length -1;
		}else{
			updatedCurrent = current - 1;
			setCurrent(updatedCurrent);
		}
	};

	const animatedWidth = useSharedValue(0);

	const animatedStyle = useAnimatedStyle(() => {
		return {
			width: `${animatedWidth.value}%`,
		};
	});

	return (
		<View className='bg-black'>
			<View >
				{content[current].content}
				<View className='absolute top-[45px] justify-evenly flex px-2 flex-row items-center' style={{width: width}}>
					{
						content.map((item, index) => {
							return (
								// eslint-disable-next-line react/jsx-key
								<View key={index} className='flex flex-1 h-[2px] ml-[5px]' style={{backgroundColor: 'rgba(255,255,255,0.5)'}}>
									{
										index < current  &&
										<Animated.View className='flex flex-1 h-[2px] bg-white opacity-100' />
									}
									{
										index === current &&
										<Animated.View className='flex flex-1 h-[2px] bg-white opacity-100'
											style={animatedStyle}
										/>
									}
								</View>
							);
						})
					}
				</View>
			</View>
			<View className='z-10 absolute flex flex-row justify-between'>
				<TouchableHighlight onPress={decreaseCounter} underlayColor='transparent' className='min-h-screen w-1/2'>
					<View></View>
				</TouchableHighlight>
				<TouchableHighlight onPress={increaseCounter} underlayColor='transparent' className='bg-transparent w-1/2'>
					<View/>
				</TouchableHighlight>
				{
					current !== content.length - 1 &&
					<View className='absolute bottom-0 flex flex-row justify-end w-full'>
						<TouchableHighlight underlayColor='transparent' className='px-8 py-2' onPress={skip}>
							<View className=' py-1 px-3 rounded-3xl bg-[#FEFFFE] flex flex-row justify-center'>
								<View className='flex flex-row items-center space-x-1'>
									<Text className='text-black text-[14px]' style={{fontFamily: 'Satoshi'}}>Skip</Text>
									<MaterialCommunityIcons className='' name='skip-next' size={19} color="black"/>
								</View>
							</View>
						</TouchableHighlight>
					</View>
				}
			</View>
		</View>
	);
};

export default Info;
