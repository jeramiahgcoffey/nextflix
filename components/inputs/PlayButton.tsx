import { useRouter } from 'next/router';
import { BsFillPlayFill } from 'react-icons/bs';

interface IPlayButtonProps {
  movieId: string;
}

const PlayButton = ({ movieId }: IPlayButtonProps) => {
  const router = useRouter();

  return (
    <button onClick={() => router.push(`/watch/${movieId}`)} className="bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex items-center hover:bg-neutral-300 transition">
      <BsFillPlayFill className="mr-1" size={20} />
      Play
    </button>
  );
};

export default PlayButton;
