import './NavBar.scss';
import { useState, useEffect } from 'react';
import { IoCloseSharp, IoSettingsSharp } from 'react-icons/io5';
import { TfiReload } from 'react-icons/tfi';
import { MdCloudUpload } from 'react-icons/md';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { VscThreeBars } from 'react-icons/vsc';
import DropdownBottomRight from '../../layout/notKnow/DropDown-Bottom-Right';

type Props = {};

const backGroundColor = '#1a1835';

const NavBar = ({}: Props) => {
  const [preDate, setPreDate] = useState<Date>();
  const [afterDate, setAfterDate] = useState<Date>();
  const [show, setShow] = useState(true);
  const [chon, setChon] = useState(1);
  useEffect(() => {
    setPreDate(new Date());
    setAfterDate(new Date());
  }, []);
  const handleButtonTimeClick = (abs: string) => {
    if (abs === 'today') {
      setAfterDate(new Date());
      setPreDate(new Date());
    }
    if (abs === 'yesterday') {
      setAfterDate(new Date());
      setPreDate(new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000));
    }
    if (abs === 'aWeekBefore') {
      setAfterDate(new Date());
      setPreDate(new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000));
    }
    if (abs === 'aMonthBefore') {
      setAfterDate(new Date());
      setPreDate(new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000));
    }
    if (abs === 'all') {
      setAfterDate(new Date());
      setPreDate(new Date('2004-01-01'));
    }
  };
  const lamLaiCuocDoi = () => {
    const elementtren = document.getElementById('lenLuon');
    const elementDuoi = document.getElementById('xuongLuon');
    const chieuRongManHinh = window.innerWidth;

    if (elementtren && elementDuoi) {
      if (!show) {
        if (chieuRongManHinh > 1308) {
          elementtren.style.height = '40px';
          elementDuoi.style.height = 'calc(100vh - 40px)';
        } else if (chieuRongManHinh > 1056 && chieuRongManHinh <= 1308) {
          elementtren.style.height = '72px';
          elementDuoi.style.height = 'calc(100vh - 72px)';
        } else if (chieuRongManHinh <= 1056) {
          elementtren.style.height = '102px';
          elementDuoi.style.height = 'calc(100vh - 102px)';
        }
      } else {
        elementtren.style.height = '40px';
        elementDuoi.style.height = 'calc(100vh - 40px)';
      }
    }

    setShow((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      const elementtren = document.getElementById('lenLuon');
      const elementDuoi = document.getElementById('xuongLuon');
      const chieuRongManHinh = window.innerWidth;

      if (elementtren && elementDuoi) {
        if (chieuRongManHinh > 1308) {
          elementtren.style.height = '40px';
          elementDuoi.style.height = 'calc(100vh - 40px)';
          setShow(true);
        } else if (chieuRongManHinh > 1056 && chieuRongManHinh <= 1308) {
          elementtren.style.height = '72px';
          elementDuoi.style.height = 'calc(100vh - 72px)';
        } else if (chieuRongManHinh <= 1056) {
          elementtren.style.height = '102px';
          elementDuoi.style.height = 'calc(100vh - 102px)';
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: backGroundColor,
        width: 'calc(100vw - 240px)',
        position: 'absolute',
        right: '0',
        top: '0',
        display: 'flex',
        justifyContent: 'space-between',
        height: 'auto',
      }}
      id='lenLuon'
      className='NavBar-full'
    >
      <form
        style={{
          padding: '8px 0px 8px',
          color: 'black',
          fontSize: '13px',
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          backgroundColor: backGroundColor,
        }}
        className='NavBar-config'
      >
        <button type='button' className={`NavBar_func-item NavBar_func--anHien NavBar_func-iconnn`}>
          <VscThreeBars
            style={{
              fontWeight: 'bold',
              height: '14px',
              width: '14px',
              color: 'white',
            }}
            onClick={() => {
              lamLaiCuocDoi();
            }}
          />
        </button>
        <input
          style={{
            height: '24px',
            width: '100px',
            outline: 'none',
            paddingLeft: '5px',
            borderRadius: '2px',
            border: 'none',
          }}
          placeholder='Patient Name'
        />
        <input
          style={{
            height: '24px',
            width: '140px',
            outline: 'none',
            paddingLeft: '5px',
            borderRadius: '2px',
            border: 'none',
          }}
          placeholder='Patient Name'
        />
        <div
          style={{ color: 'white', display: show ? 'flex' : 'none', alignItems: 'center', flexWrap: 'wrap' }}
          className='NavBar_func'
        >
          <button
            style={{
              height: '24px',
              border: chon === 1 ? '1px solid yellow' : '1px solid #d9d9d9',
              backgroundColor: backGroundColor,
            }}
            className='NavBar_func-item'
            type='button'
            onClick={() => {
              setChon(1);
              handleButtonTimeClick('today');
            }}
          >
            Today
          </button>
          <button
            style={{
              height: '24px',
              border: chon === 2 ? '1px solid yellow' : '1px solid #d9d9d9',
              backgroundColor: backGroundColor,
            }}
            className='NavBar_func-item'
            type='button'
            onClick={() => {
              setChon(2);
              handleButtonTimeClick('yesterday');
            }}
          >
            Yesterday
          </button>
          <button
            style={{
              height: '24px',
              border: chon === 3 ? '1px solid yellow' : '1px solid #d9d9d9',
              backgroundColor: backGroundColor,
            }}
            className='NavBar_func-item'
            type='button'
            onClick={() => {
              setChon(3);
              handleButtonTimeClick('aWeekBefore');
            }}
          >
            -7 Days
          </button>
          <button
            style={{
              height: '24px',
              border: chon === 4 ? '1px solid yellow' : '1px solid #d9d9d9',
              backgroundColor: backGroundColor,
            }}
            className='NavBar_func-item'
            type='button'
            onClick={() => {
              setChon(4);
              handleButtonTimeClick('aMonthBefore');
            }}
          >
            -30 Days
          </button>
          <button
            style={{
              height: '24px',
              border: chon === 5 ? '1px solid yellow' : '1px solid #d9d9d9',
              backgroundColor: backGroundColor,
            }}
            className='NavBar_func-item'
            type='button'
            onClick={() => {
              setChon(5);
              handleButtonTimeClick('all');
            }}
          >
            All
          </button>

          <input
            type='date'
            className='NavBar_DatePicker-config NavBar_func-item'
            value={preDate ? preDate.toISOString().slice(0, 10) : ''}
            onChange={(e) => {
              if (afterDate && new Date(e.target.value).getTime() <= afterDate.getTime())
                setPreDate(new Date(e.target.value));
            }}
          />
          <span className='NavBar_func-item'>-</span>
          <input
            type='date'
            className='NavBar_DatePicker-config NavBar_func-item'
            value={afterDate ? afterDate.toISOString().slice(0, 10) : ''}
            onChange={(e) => {
              if (preDate && new Date(e.target.value).getTime() >= preDate.getTime())
                setAfterDate(new Date(e.target.value));
            }}
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button className='NavBar_func-item NavBar_func-icon' style={{}}>
              <IoCloseSharp style={{ fontWeight: 'bold' }} />
            </button>
            <button className='NavBar_func-item NavBar_func-icon'>
              <TfiReload style={{ fontWeight: 'bold' }} />
            </button>
            <button className='NavBar_func-item NavBar_func-icon'>
              <MdCloudUpload style={{ fontWeight: 'bold' }} />
            </button>
            <button className='NavBar_func-item NavBar_func-icon'>
              <IoSettingsSharp style={{ fontWeight: 'bold' }} />
            </button>
            <button className='NavBar_func-item NavBar_func-icon'>
              <FaArrowRightArrowLeft style={{ fontWeight: 'bold' }} />
            </button>
          </div>
        </div>
      </form>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#faad14',
            marginRight: '6px',
          }}
        >
          Name
        </div>
        <DropdownBottomRight />
      </div>
    </div>
  );
};

export default NavBar;
