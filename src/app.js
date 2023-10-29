import { useLaunch } from "@tarojs/taro";
import "taro-ui/dist/style/index.scss";
import { View } from '@tarojs/components'

import { AtButton } from 'taro-ui'

import "./app.scss";

function App({ children }) {
    useLaunch(() => {
        console.log("App launched.");
    });

    // children 是将要会渲染的页面
    return <View className='app-container'>
        <AtButton>AtButton</AtButton>
        { children }
    </View>;
}

export default App;
