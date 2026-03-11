import { Button } from 'antd';
import { Link } from 'react-router';
import HelloWorld from '@/components/hello-world';

export default function Home() {
  return (
    <div className="home">
      <div className="flex gap-2">
        <Link to="/about"><Button>about</Button></Link>
        <Link to="/user"><Button type="primary">用户管理</Button></Link>
      </div>
      <div>
        <div className="text-red-400">呵呵</div>
        <HelloWorld />
      </div>
    </div>
  );
}
