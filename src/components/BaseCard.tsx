import { AnimateDiv } from './Animate';

interface BaseCardProps {
  colSpan?: 'col-span-1' | 'col-span-2' | 'col-span-3';
  rowSpan?: 'row-span-1' | 'row-span-2' | 'row-span-3' | 'row-span-4';
  children?: React.ReactNode;
}

const BaseCard = ({
  children,
  colSpan = 'col-span-1',
  rowSpan = 'row-span-1',
}: BaseCardProps) => {
  return (
    <AnimateDiv
      animation="scaleUp"
      className={`bg-white flex items-center gap-4 justify-between rounded-3xl p-4 shadow-sm ${colSpan} ${rowSpan}`}
    >
      {children}
    </AnimateDiv>
  );
};

export default BaseCard;
