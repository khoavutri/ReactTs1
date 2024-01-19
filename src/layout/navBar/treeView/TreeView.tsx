import data from '../../../mocks/data.json';
import './treeview.scss';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import { FaHouseMedical } from 'react-icons/fa6';
import { FaFolder } from 'react-icons/fa';
import { Checkbox } from 'antd';
import { useEffect, useState } from 'react';

type Props = {};
interface IModality {
  show: boolean;
}

interface IFolder {
  show: boolean;
  chon: boolean;
  modalitys: Array<IModality>;
}

interface IEntrie {
  show: boolean;
  chon: boolean;
  folders: Array<IFolder>;
}
const backGroundColor = '#1a1835';
const colorIcon = '#faad14';
const TreeView = ({}: Props) => {
  const [list, setList] = useState<Array<IEntrie>>([]);
  const [sever, setSever] = useState<Array<number>>([]);
  const [choseAll, setChoseAll] = useState(false);
  const [showList, setShowList] = useState(true);
  const filterString = (inputString: string, maxLength: number) => {
    if (inputString.length <= maxLength) {
      return inputString;
    } else {
      return inputString.slice(0, 9) + '...';
    }
  };
  useEffect(() => {
    const ob: Array<IEntrie> = [];
    for (let i = 0; i < data.data.length; i++) {
      const ent: IEntrie = {
        show: false,
        chon: false,
        folders: [],
      };
      for (let j = 0; j < data.data[i].folder.length; j++) {
        const fol: IFolder = {
          show: false,
          chon: false,
          modalitys: [],
        };
        if (data.data[i].folder[j]) {
          for (let l = 0; l < data.data[i].folder[j].modalitys.length; l++) {
            const mo: IModality = {
              show: false,
            };
            fol.modalitys.push(mo);
          }
        }
        ent.folders.push(fol);
      }
      ob.push(ent);
    }
    setList(ob);
  }, []);

  const xemXet = () => {
    const uml = [...list];
    let all = true;
    for (let i = 0; i < uml.length; i++) {
      if (!uml[i].chon) {
        all = false;
        break;
      }
    }
    setChoseAll(all);
  };
  const setShowEntrie = (index1: number) => {
    const uml = [...list];
    uml[index1].show = !uml[index1].show;
    xemXet();
    setList(uml);
  };

  const setShowFolder = (index1: number, index2: number) => {
    const uml = [...list];
    uml[index1].folders[index2].show = !uml[index1].folders[index2].show;
    xemXet();
    setList(uml);
  };
  const setChonModalitys = (index1: number, index2: number, index3: number) => {
    const uml = [...list];
    uml[index1].folders[index2].modalitys[index3].show = !uml[index1].folders[index2].modalitys[index3].show;
    uml[index1].chon = false;
    uml[index1].folders[index2].chon = false;
    xemXet();
    setList(uml);
  };
  const chonFullFolder = (index1: number, index2: number) => {
    const uml = [...list];
    uml[index1].folders[index2].chon = !uml[index1].folders[index2].chon;
    if (uml[index1].folders[index2].chon) {
      for (let i = 0; i < uml[index1].folders[index2].modalitys.length; i++) {
        uml[index1].folders[index2].modalitys[i].show = true;
      }
    } else {
      for (let i = 0; i < uml[index1].folders[index2].modalitys.length; i++) {
        uml[index1].folders[index2].modalitys[i].show = false;
      }
    }
    xemXet();
    setList(uml);
  };
  const setFullEntries = (index1: number) => {
    const uml = [...list];
    uml[index1].chon = !uml[index1].chon;

    if (uml[index1].chon) {
      for (let i = 0; i < uml[index1].folders.length; i++) {
        uml[index1].folders[i].chon = true;
        for (let j = 0; j < uml[index1].folders[i].modalitys.length; j++) {
          uml[index1].folders[i].modalitys[j].show = true;
        }
      }
    } else {
      for (let i = 0; i < uml[index1].folders.length; i++) {
        uml[index1].folders[i].chon = false;
        for (let j = 0; j < uml[index1].folders[i].modalitys.length; j++) {
          uml[index1].folders[i].modalitys[j].show = false;
        }
      }
    }
    xemXet();
    setList(uml);
  };
  const showAllList = () => {
    const xyz = !choseAll;
    const uml = [...list];

    if (xyz) {
      for (let index1 = 0; index1 < uml.length; index1++) {
        uml[index1].chon = true;
        for (let index2 = 0; index2 < uml[index1].folders.length; index2++) {
          uml[index1].folders[index2].chon = true;
          for (let index3 = 0; index3 < uml[index1].folders[index2].modalitys.length; index3++) {
            uml[index1].folders[index2].modalitys[index3].show = true;
          }
        }
      }
    } else {
      for (let index1 = 0; index1 < uml.length; index1++) {
        uml[index1].chon = false;
        for (let index2 = 0; index2 < uml[index1].folders.length; index2++) {
          uml[index1].folders[index2].chon = false;
          for (let index3 = 0; index3 < uml[index1].folders[index2].modalitys.length; index3++) {
            uml[index1].folders[index2].modalitys[index3].show = false;
          }
        }
      }
    }

    setChoseAll(xyz);
    setList(uml);
  };
  const selectOnly = (index1: number, index2: number, index3: number) => {
    const uml = [...list];

    for (let i = 0; i < uml.length; i++) {
      uml[i].chon = false;
      for (let j = 0; j < uml[i].folders.length; j++) {
        uml[i].folders[j].chon = false;
        for (let t = 0; t < uml[i].folders[j].modalitys.length; t++) {
          uml[i].folders[j].modalitys[t].show = false;
        }
      }
    }
    uml[index1].folders[index2].modalitys[index3].show = false;
    setList(uml);
    setChoseAll(false);
  };
  const chonOnlyFolder = (index1: number, index2: number) => {
    const updatedList = [...list];
    updatedList[index1].folders.forEach((folder, i) => {
      folder.chon = i === index2;
      folder.modalitys.forEach((modality) => {
        modality.show = i === index2;
      });
    });

    updatedList.forEach((uml, inde1) => {
      if (inde1 !== index1) {
        uml.chon = false;
        uml.folders.forEach((folder) => {
          folder.chon = false;

          folder.modalitys.forEach((modality) => {
            modality.show = false;
          });
        });
      }
    });

    updatedList[index1].folders[index2].modalitys.forEach((modality) => {
      modality.show = true;
    });

    setList(updatedList);
    setChoseAll(false);
  };

  const selectOnlyEntries = (index1: number) => {
    const uml = [...list];
    uml[index1].chon = true;
    for (let index2 = 0; index2 < uml[index1].folders.length; index2++) {
      uml[index1].folders[index2].chon = true;
      for (let index3 = 0; index3 < uml[index1].folders[index2].modalitys.length; index3++) {
        uml[index1].folders[index2].modalitys[index3].show = true;
      }
    }
    for (let i = 0; i < uml.length; i++) {
      if (i !== index1) {
        uml[i].chon = false;
        for (let index2 = 0; index2 < uml[i].folders.length; index2++) {
          uml[i].folders[index2].chon = false;
          for (let index3 = 0; index3 < uml[i].folders[index2].modalitys.length; index3++) {
            uml[i].folders[index2].modalitys[index3].show = false;
          }
        }
      }
    }
    setList(uml);
    setChoseAll(false);
  };

  useEffect(() => {
    const uml = [...list];
    const cloneSever: Array<number> = [];
    for (let index1 = 0; index1 < uml.length; index1++) {
      for (let index2 = 0; index2 < uml[index1].folders.length; index2++) {
        for (let index3 = 0; index3 < uml[index1].folders[index2].modalitys.length; index3++) {
          if (uml[index1].folders[index2].modalitys[index3].show) {
            cloneSever.push(data.data[index1].folder[index2].modalitys[index3].id);
          }
        }
      }
    }

    setSever(cloneSever);
    console.log(sever);
  }, [list]);
  return (
    <div className='TreeView'>
      <div style={{ width: '100%', position: 'relative' }}>
        <div style={{ width: '100%', position: 'sticky', top: '0', backgroundColor: backGroundColor, zIndex: '1' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '8px',
              textAlign: 'center',
            }}
          >
            <img
              src='https://telerad.vn:8887/Content/logo/logo.jpg?v=0.939125665445917'
              style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
            />

            <span>KHOA-RISS</span>
          </div>
          <button
            style={{
              width: '100%',
              height: '35px',
              backgroundColor: '#1f1c43',
              border: '0.5px solid #373469',
              marginTop: '5px',
            }}
            className='TreeView-hover'
            onClick={() => {
              setShowList((prev) => !prev);
            }}
          >
            DANH SÁCH MÁY 0-0
          </button>
          <div>
            <div
              className='TreeView_flexRow plusPlus'
              style={{ marginTop: '5px', marginLeft: '16px', display: showList ? '' : 'none' }}
            >
              <FaHouseMedical
                style={{ marginRight: '10px', width: '24px', height: '24px', color: colorIcon }}
                className='TreeView-hover'
                onClick={() => showAllList()}
              />
              <span onClick={() => showAllList()}>All</span>
            </div>
          </div>
        </div>

        <div style={{ width: '100%', display: showList ? '' : 'none' }}>
          {list.map((da, index1) => (
            <div key={index1} className='plusPlus TreeView_content1'>
              <div className='TreeView_flexRow TreeView-hover'>
                {!da.show && (
                  <IoIosArrowForward
                    onClick={() => {
                      setShowEntrie(index1);
                    }}
                  />
                )}
                {da.show && (
                  <IoIosArrowDown
                    onClick={() => {
                      setShowEntrie(index1);
                    }}
                  />
                )}
                <FaHouseMedical
                  style={{ marginRight: '10px', width: '24px', height: '24px', color: colorIcon }}
                  className='TreeView-hover'
                  onClick={() => setFullEntries(index1)}
                />
                <span onClick={() => selectOnlyEntries(index1)}>{data.data[index1].name}</span>
              </div>
              {da.show && (
                <>
                  {da.folders.map((ou, index2) => (
                    <div key={index2}>
                      <div className='TreeView_flexRow TreeView-hover' style={{ marginLeft: '32px' }}>
                        {ou.show && (
                          <IoIosArrowDown
                            onClick={() => {
                              setShowFolder(index1, index2);
                            }}
                          />
                        )}
                        {!ou.show && (
                          <IoIosArrowForward
                            onClick={() => {
                              setShowFolder(index1, index2);
                            }}
                          />
                        )}

                        <FaFolder
                          style={{ width: '21px', height: '21px', color: colorIcon, marginRight: '5px' }}
                          onClick={() => chonFullFolder(index1, index2)}
                        />
                        <span onClick={() => chonOnlyFolder(index1, index2)}>
                          {filterString(data.data[index1].folder[index2].name, 12)}
                        </span>
                      </div>
                      {ou.show && (
                        <>
                          {ou.modalitys.map((x, index3) => (
                            <label
                              key={index3}
                              className='TreeView_flexRow T
                            reeView-hover TreeView_hover'
                              style={{ marginLeft: '70px', marginTop: '3px' }}
                            >
                              <Checkbox
                                className='checkbox'
                                checked={x.show}
                                onClick={() => setChonModalitys(index1, index2, index3)}
                              />
                              <span onClick={() => selectOnly(index1, index2, index3)} style={{ marginLeft: '5px' }}>
                                {filterString(data.data[index1].folder[index2].modalitys[index3].name, 12)}
                              </span>
                            </label>
                          ))}
                        </>
                      )}
                    </div>
                  ))}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TreeView;
