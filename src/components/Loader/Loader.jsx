import { TailSpin} from 'react-loader-spinner';
import { LoaderStyle, Title} from './LoaderStyle.styled';

export function Loader({title='', color='yellow', size='20px'}) {
   return (
      <LoaderStyle color={color}>
      <TailSpin height={size} width={size} color={color} />
      <Title fontSize={size}>{title}</Title>
</LoaderStyle>
  );
}