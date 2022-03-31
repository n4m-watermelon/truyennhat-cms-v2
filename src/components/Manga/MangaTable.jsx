import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllManga } from "../../store/mangaSlice";
import { Table, Button, Modal, Input } from "antd";
import "./MangaTable.scss";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Description",
    dataIndex: "description",
  },
];
const { TextArea } = Input;

const Manga = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const listManga = useSelector((state) => state.manga.listManga);
  const [dataInput, setDataInput] = useState({
    name: "",
    description: "",
    author_name: "",
  });
  useEffect(() => {
    dispatch(fetchAllManga());
  }, []);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    // setIsModalVisible(false);
    console.log("dataInput", dataInput);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setDataInput({ ...dataInput, [name]: value });
  };
  return (
    <div className="manga-table-wrapper">
      <div className="btn-add-manga">
        <Button type="primary" onClick={showModal}>
          Add new
        </Button>
        <Modal
          title="Manga"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="modal-wrapper">
            <Input
              name="name"
              onChange={handleInputChange}
              value={dataInput.name}
              placeholder="Name"
            />
            <Input
              name="author_name"
              onChange={handleInputChange}
              placeholder="Author name"
              value={dataInput.author_name}
            />
            <TextArea
              name="description"
              onChange={handleInputChange}
              autoSize={{ minRows: 2, maxRows: 6 }}
              placeholder="Description"
              value={dataInput.description}
            />
          </div>
        </Modal>
      </div>
      <Table columns={columns} dataSource={listManga} bordered />
    </div>
  );
};

export default Manga;
