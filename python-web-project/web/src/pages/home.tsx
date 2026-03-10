import { Button } from 'antd';
import { Link } from 'react-router';
import HelloWorld from '@/components/hello-world';

export default function Home() {
  return (
    <div className="home">
      <Link to="/about" className="text-blue-500"><Button>about</Button></Link>
      <div>
        <div className="text-red-400">呵呵</div>
        <HelloWorld />
      </div>
    </div>
  );
}
