import useBillboard from '@/hooks/useBillboard';
import useInfoModal from '@/hooks/useInfoModal';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import PlayButton from '../inputs/PlayButton';

const Billboard = () => {
  const { data: movie } = useBillboard();
  const { openModal } = useInfoModal();

  return (
    <div className="relative h-[56.25vw]">
      <video
        className="w-full h-[56.25vw] object-cover brightness-[60%]"
        poster={movie?.thumbnailUrl}
        src={movie?.videoUrl}
        autoPlay
        muted
        loop
      />
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl md:w-[50%] h-full lg:text-6xl font-bold drop-shadow-xl">
          {movie?.title}
        </p>
        <p className="text-white text-[12px] md:text-lg mt-3 md:mt-8 w-[70%] lg:w-[60%] drop-shadow-xl">
          {movie?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <PlayButton movieId={movie?.id} />
          <button
            onClick={() => openModal(movie?.id)}
            className="
        bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition
      "
          >
            <AiOutlineInfoCircle className="mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
