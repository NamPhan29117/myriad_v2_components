import React, { useState, useReducer, useEffect } from "react";
import map from "lodash/map";
import maxBy from "lodash/maxBy";
import { v4 as uuidv4 } from "uuid";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import "./style.scss";
import GridLayout from "react-grid-layout";
import { Modal, Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faX } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import classNames from "classnames";

const data = [
  // {
  //   i: uuidv4(),
  //   x: 0,
  //   y: 0,
  //   w: 2,
  //   h: 2,
  //   title: "Example widget 1",
  // },
];

export default function Index() {
  const initialState = { dataLayout: data };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [itemResize, setItemResize] = useState(null);
  const [activeWidgetCatalog, setActiveWidgetCatalog] = useState(undefined);
  const [itemHasAdd, setItemHasAdd] = useState(null);
  const [dropWidget, setDropWidget] = useState(undefined);
  const [minWidth, setMinWidth] = useState(10);
  // const [compactType, setCompactType] = useState("vertical");
  const { Option } = Select;

  // console.log("vvvvvvvvvvvv", compactType);

  const { handleSubmit } = useForm();

  function handleChangeWidth(value) {
    const updateItem = {
      ...itemResize,
      w: value,
    };

    setItemResize(updateItem);
  }

  function handleChangeHeight(value) {
    const updateItem = {
      ...itemResize,
      h: value,
    };

    setItemResize(updateItem);
  }

  const handlerDataLayout = (state, action) => {
    switch (action.type) {
      case "ON_DELETE_WIDGET": {
        const dataHandle = [...state.dataLayout];
        const updateData = dataHandle.filter(
          (item) => item.i !== action.payload
        );
        return {
          ...state,
          dataLayout: updateData,
        };
      }

      case "ON_SAVE_WIDGET_RESIZE": {
        const dataHandle = [...state.dataLayout];
        const updateData = dataHandle.map((item) => {
          if (item.i === action.payload.i) {
            item = action.payload;
          }
          return item;
        });
        return {
          ...state,
          dataLayout: updateData,
        };
      }

      case "ON_ADD_WIDGET": {
        const dataHandle = [...state.dataLayout];
        const updateData = [...dataHandle, action.payload];

        return {
          ...state,
          dataLayout: updateData,
        };
      }

      default:
        throw new Error("Load data error");
    }
  };

  const [state, dispatch] = useReducer(handlerDataLayout, initialState);
  const widgetCatalogs = React.useMemo(() => {
    return [
      {
        id: "id-1",
        title: "Assigned to Me",
        img: "images/assignedToMe.png",
        description:
          "Allows team members to quickly view and manage work Allows team members to quickly view and manage work",
        i: uuidv4(),
        x: (state.dataLayout.length * 2) % 12,
        y: 0, // puts it at the bottom
        w: 2,
        h: 2,
      },
      {
        id: "id-2",
        title: "Build history",
        img: "images/buildChart.png",
        description: "Shows the build history of a selected build pipeline.",
        i: uuidv4(),
        x: (state.dataLayout.length * 2) % 12,
        y: 0, // puts it at the bottom
        w: 3,
        h: 3,
      },
    ];
  }, [state.dataLayout.length]);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onDeleteWidget = (id) => {
    dispatch({
      type: "ON_DELETE_WIDGET",
      payload: id,
    });
  };

  const editAbleWidget = (item) => {
    setItemResize(item);
    setTimeout(() => {
      setIsModalVisible(true);
    }, 0);
  };

  const onSubmit = () => {
    dispatch(
      {
        type: "ON_SAVE_WIDGET_RESIZE",
        payload: itemResize,
      },
      setIsModalVisible(false)
    );
  };

  const onAddWidget = () => {
    if (itemHasAdd) {
      dispatch({
        type: "ON_ADD_WIDGET",
        payload: itemHasAdd,
      });
    }
  };

  const onDrop = (layout, layoutItem, _event) => {
    if (layout && layout.length > 0) {
      const { x, y, w, h, i } = layout[layout.length - 1];
      const itemHasAdd = {
        x,
        y,
        w,
        h,
        i,
        title: dropWidget.title,
      };
      dispatch({
        type: "ON_ADD_WIDGET",
        payload: itemHasAdd,
      });
    }
  };

  // const triggerEventChange = () => {
  //   console.log("vvvvv");
  // };

  // useEffect(() => {
  //   setCompactType(null);
  // }, [state.dataLayout]);

  const onLayoutChange = (layout) => {
    if (layout.length > 0) {
      const itemMaxX = maxBy(layout, "x");
      const minWidthlayout = 170 * parseInt(itemMaxX.x + itemMaxX.w) + 10;
      setMinWidth(minWidthlayout);
    }
  };

  const createElement = (el) => {
    const i = el.i;
    return (
      <div
        key={i}
        data-grid={el}
        className="widget-layout"
        style={{ touchAction: "none" }}
      >
        <div className="wrap-widget">
          <div className="widget-header">
            <div className="left">{el.title ? el.title : "Test Widget"}</div>
            <div className="right">
              <div
                onClick={() => {
                  editAbleWidget(el);
                }}
              >
                <FontAwesomeIcon icon={faGear} size="1x" color="#666666" />
              </div>
              <div onClick={() => onDeleteWidget(el.i)}>
                <FontAwesomeIcon
                  icon={faX}
                  size="1x"
                  color="rgba(232,17,35,1)"
                />
              </div>
            </div>
          </div>
          <div className="widget-body"></div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="v-scroll-auto flex flex-grow relative region-content"
      data-renderedregion="content"
      role="main"
    >
      <div className="dashboard-view">
        <div className="absolute-fill bolt-page v-scroll-auto flex-column bolt-page-white">
          <div className="dashboard-content flex-grow flex-row scroll-hidden">
            {/* PHAN TASK */}
            <div className="primary-content flex-grow flex-column scroll-hidden">
              <div className="flex-grow flex-column scroll-hidden">
                <div className="scroll-auto flex-grow flex-column">
                  <div
                    className="devops-dashboard-grid flex-grow editable"
                    style={{ minWidth: `${minWidth}px` }}
                  >
                    <GridLayout
                      className="layout"
                      layout={state.dataLayout}
                      cols={12}
                      compactType={"vertical"}
                      rowHeight={160}
                      width={2050}
                      onLayoutChange={onLayoutChange}
                      useCSSTransforms={true}
                      isResizable={false}
                      onDrop={onDrop}
                      isDroppable={true}
                      droppingItem={{
                        i: uuidv4(),
                        w: dropWidget ? dropWidget.w : 1,
                        h: dropWidget ? dropWidget.h : 1,
                      }}
                    >
                      {map(state.dataLayout, (el) => createElement(el))}
                    </GridLayout>
                  </div>
                </div>
              </div>
            </div>
            <Modal
              title={
                <span className="section-title-s2ix section-title-edit">
                  Configuration
                </span>
              }
              visible={isModalVisible}
              onCancel={handleCancel}
              destroyOnClose={true}
              className="modal-resize"
              width={450}
              footer={null}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="custom-body">
                  <div className="wrap-select">
                    <div className="custom-select">
                      <div
                        style={{ marginBottom: "5px" }}
                        className="main-text-s2ix"
                      >
                        Width
                      </div>
                      <Select
                        defaultValue={itemResize ? itemResize.w : 1}
                        style={{ width: "100%" }}
                        onChange={handleChangeWidth}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                          return (
                            <Option value={item} key={item}>
                              {item}
                            </Option>
                          );
                        })}
                      </Select>
                    </div>
                    <div className="custom-select">
                      <div
                        style={{ marginBottom: "5px" }}
                        className="main-text-s2ix"
                      >
                        Height
                      </div>
                      <Select
                        defaultValue={itemResize ? itemResize.h : 1}
                        style={{ width: "100%" }}
                        onChange={handleChangeHeight}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                          return (
                            <Option value={item} key={item}>
                              {item}
                            </Option>
                          );
                        })}
                      </Select>
                    </div>
                  </div>
                  <div className="left-auto button-save-widget">
                    <input type="submit" value="Save" />
                  </div>
                </div>
              </form>
            </Modal>
            {/* PHAN WIDGET */}
            <div className="dashboards-widget-inline-catalog flex-column flex-noshrink scroll-hidden">
              <div className="section-title-s2ix header-add-widget">
                Add Widget
              </div>
              <div className="list-widget">
                {widgetCatalogs.map((item) => {
                  return (
                    <div
                      key={item.id}
                      id={item.id}
                      draggable={true}
                      unselectable="on"
                      // this is a hack for firefox
                      // Firefox requires some kind of initialization
                      // which we can do by adding this attribute
                      // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313

                      onDragStart={(e) => {
                        // setCompactType(null);
                        const itemDrop = widgetCatalogs.filter((item) => {
                          return item.id === e.target.id;
                        })[0];
                        setDropWidget(itemDrop);

                        e.dataTransfer.setData("text/plain", "");
                      }}
                      className={classNames(
                        {
                          active: item.i === activeWidgetCatalog,
                        },
                        "widget-catalog-entry droppable-element"
                      )}
                      onClick={() => {
                        setItemHasAdd(item);
                        setActiveWidgetCatalog(item.i);
                      }}
                    >
                      <div className="widget-catalog-image">
                        <img alt="" src={item.img} />
                      </div>
                      <div className="widget-details">
                        <div className="widget-details-title section-title-s2ix">
                          {item.title}
                        </div>
                        <div className="widget-description main-text-s2ix">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="footer-add-widget">
                <button
                  key="right"
                  className="button button--secondary left-auto btn-add-widget"
                  onClick={() => onAddWidget()}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
