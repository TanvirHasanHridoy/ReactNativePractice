import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ImageScreen from './src/screens/ImageScreen';
import ImagesScreen from './src/screens/ImagesScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Image: ImageScreen,
    Images: ImagesScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
//C:\Users\Administrator\Desktop\ReactNative\rn-starter\rn-starter
