import picture from '../../img/picture.png';
import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Item = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  text-align: center;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const BgLogo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;
export const BgImage = styled.div`
  width: 380px;
  height: 210px;
  background-image: url(${picture});
  background-repeat: no-repeat;
  background-position: center;
`;

export const UserWrapper = styled.div`
  position: relative;
  height: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  :after {
    content: '';
    width: 100%;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const UserBorder = styled.div`
  position: absolute;
  z-index: 50;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const UserAvatar = styled.img`
  position: absolute;
  z-index: 60;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin: 0;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  width: 196px;
  height: 50px;
  margin-top: 10px;

  background-color: ${props => (props.active ? `#5cd3a8` : `#ebd8ff`)};

  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  :hover {
    background-color: #5cd3a8;
  }
`;
export const LoadButton = styled.button`
  padding: 8px 16px;
  border-radius: 5px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  color: #fff;
  border: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-family: 'Montserrat';
  font-weight: 500;
  min-width: 180px;
  margin: 20px auto;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    background-color: #4fa94d;
  }
`;
