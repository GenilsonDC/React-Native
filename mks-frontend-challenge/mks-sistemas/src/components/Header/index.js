import Image from 'next/image';
import { useState } from 'react';
import carrinho from '../../assets/carrinho.png';
import { useCart } from '../../components/context/CartContext';
import Sidebar from '../SideBar';
import * as S from './styles';

function Header() {
  const { cartCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeSidebar = () => {
    setIsCartOpen(false);
  };

  return (
    <S.Container>
      <S.LeftSide>
        <div className="mksTitle">
          <h1>MKS</h1>
        </div>
        <div className="sistemTitle">
          <h1>Sistemas</h1>
        </div>
      </S.LeftSide>
      <S.RightSide>
        <div className="buttonContainer">
          <button onClick={toggleCart}>
            <div className="containerbuton">
              <Image src={carrinho} alt={'imagem de carrinho de compras'} />
              <h1>{cartCount}</h1>
            </div>
          </button>
        </div>
      </S.RightSide>
      {isCartOpen && <Sidebar closeSidebar={closeSidebar} />}
    </S.Container>
  );
}

export default Header;
