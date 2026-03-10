import Card from '@repo/ui-custom/card';
import { Link } from 'react-router';
import HelloWorld from '@/components/hello-world';

export default function Home() {
  return (
    <div className="home">
      <Link to="/about" className="text-blue-500">about</Link>
      <div>
        <div className="text-red-400">呵呵</div>
        <Card>你好啊</Card>
        <HelloWorld />
      </div>
    </div>
  );
}
