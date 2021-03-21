// import React, { Component } from 'react'
// import { View, Dimensions} from 'react-native';
// import Svg, { Path } from 'react-native-svg';
// import {MidasStyles} from '../constants/'

// const WIDTH = Dimensions.get('screen').width;
// const height = Dimensions.get('screen').height;

// export default class HeaderComponent extends Component {
//     render() {
//         const {title, subtitle, imgSource} = this.props
//         return (
//             <View style={MidasStyles.svgCurve}>
//             <View style={{ backgroundColor: '#fd0d20', height: 160 }}>
//               <Svg
//                 height={height*0.2}
//                 width="100%"
//                 viewBox="0 0 2000 5000"
//                 style={{ position: 'absolute', top: height*0.05}}
//               >
//                 <path fill="#fd0d20" fill-opacity="1" d="M0,128L18.5,133.3C36.9,139,74,149,111,160C147.7,171,185,181,222,202.7C258.5,224,295,256,332,272C369.2,288,406,288,443,240C480,192,517,96,554,96C590.8,96,628,192,665,224C701.5,256,738,224,775,208C812.3,192,849,192,886,176C923.1,160,960,128,997,117.3C1033.8,107,1071,117,1108,106.7C1144.6,96,1182,64,1218,80C1255.4,96,1292,160,1329,170.7C1366.2,181,1403,139,1422,117.3L1440,96L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path>
//               </Svg>
//             </View>
//           </View>
//         )
//     }
// }