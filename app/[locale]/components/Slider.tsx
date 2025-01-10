// components/Slider.tsx
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: '600px', // Fixed height for each carousel item
  color: '#fff',
  lineHeight: '550px', // Center content vertically
  textAlign: 'center',
  background: '#364d79',
};

const Slider: React.FC = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
        <img src="https://images.unsplash.com/photo-1735822083502-0c5fab870457?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>

<img src="https://images.unsplash.com/photo-1732565277341-ebb37d748a87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img src="https://images.unsplash.com/photo-1731770207534-4411fd273c9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img src="https://images.unsplash.com/photo-1732006358505-e2f6a623adc2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </h3>
    </div>
  </Carousel>
);

export default Slider;
