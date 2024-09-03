'use client';
import { Button } from '@/components/ui/button';
import { decrement, increment } from '@/redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export default function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <span>{count}</span>
      <Button variant={'destructive'} onClick={() => dispatch(increment())}>
        Increment
      </Button>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
    </div>
  );
}
