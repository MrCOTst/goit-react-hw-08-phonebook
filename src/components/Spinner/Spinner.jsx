import { Puff } from 'react-loader-spinner';
import styled from 'styled-components';

export default function Spinner() {
    return (
        <Loader>
            <Puff
  height="80"
  width="80"
  radisu={1}
  color="#4fa94d"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>

        </Loader>
    )
}

const Loader = styled.div`
  display: flex;
  justify-content: center;
`;