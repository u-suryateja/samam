// components/Slider.tsx
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: '600px', // Fixed height for each carousel item
  color: '#fff',
  lineHeight: '450px', // Center content vertically
  textAlign: 'center',
  background: '#364d79',
};

const Slider: React.FC = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

export default Slider;
