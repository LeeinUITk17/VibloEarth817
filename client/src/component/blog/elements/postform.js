import React, { useState} from 'react';
import { useContext } from 'react';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { UserContext } from '../../../context/UserContext';
const BlogPostForm = () => {

  const { user } = useContext(UserContext);


  const [currentPreview, setCurrentPreview] = useState(1);
  const [previews, setPreviews] = useState([]);
  const [editorData, setEditorData] = useState('');

  const previewArrayImg = (event) => {
    const files = event.target.files;
    if (files) {
      const filesAmount = files.length;
      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreviews((prevPreviews) => [
            ...prevPreviews,
            { id: currentPreview, url: e.target.result }
          ]);
          setCurrentPreview((prevPreview) => prevPreview + 1);
        };
        reader.readAsDataURL(files[i]);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.set('content', editorData);

    try {
      const response = await axios.post('http://localhost:8000/api/blog/blognew', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
     alert(response.data);
     window.location.href = '/news';

    } catch (error) {
      alert('Đăng bài viết thất bại. Vui lòng thử lại.');
    }
  };

  return (
    <div className="container mt-4">
      <form id="contentForm" onSubmit={handleSubmit} method="post" encType="multipart/form-data">
      <input type="hidden" name="authorID" value={user ? user._id : ''} />
      <input type="hidden" name="author" value={user ? user.name : ''} />
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body">
                <ol className="activity-checkout mb-0 px-4 mt-3">
                  <li className="checkout-item">
                    <div className="avatar checkout-icon p-1">
                      <div className="avatar-title rounded-circle bg-primary">
                        <i className="fa fa-image text-white font-size-20"></i>
                      </div>
                    </div>
                    <div className="feed-item-list">
                      <div>
                        <h5 className="font-size-16 mb-1">Thông tin bài viết</h5>
                        <p className="text-muted text-truncate mb-4">Tiều đề và nội dung chính của bài viết</p>
                        <div className="row" style={{ marginTop: '20px' }}>
                          <div className="col-lg-12">
                            <div className="mb-4 mb-lg-0">
                              <label className="form-label">Thể loại bài viết là gì?</label>
                              <select className="form-control form-select" title="LoaiBai" id="LoạiBai" name="category" required>
                              <option value='marine'>Marine</option>
                              <option value='pirates'>Pirates</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <label className="form-label">Ảnh nổi bật của bài viết</label>
                          <div className="col-lg-3 col-sm-6" style={{ height: '120px', width: '180px' }}>
                            <div data-bs-toggle="collapse" style={{ height: '100%', width: '100%' }}>
                              <input type="file" id="fileUploadimage" name="avatar" style={{ display: 'none' }} data-allow-reorder="false" data-max-file-size="10MB" data-max-files="1" onChange={previewArrayImg} required />
                              <label className="card-radio-label" style={{ height: '100%', width: '100%' }}>
                                <span className="card-radio py-3 text-center text-truncate" onClick={(e) => { e.stopPropagation(); document.getElementById('fileUploadimage').click(); }}>
                                  <i className="fa fa-image d-block h2 mb-3"></i>
                                  Thêm hình ảnh
                                </span>
                              </label>
                            </div>
                          </div>
                          {previews.map((preview, index) => (
                            <div key={index} className="col-lg-3 col-sm-6" style={{ height: '120px', width: '180px' }}>
                              <div data-bs-toggle="collapse" style={{ height: '100%', width: '100%' }}>
                                <label className="card-radio-label" style={{ height: '100%', width: '100%' }}>
                                  <div id={`preview${preview.id}`} alt="Avatar Preview" style={{ backgroundImage: `url(${preview.url})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }}></div>
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="checkout-item">
                    <div className="avatar checkout-icon p-1">
                      <div className="avatar-title rounded-circle bg-primary">
                        <i className="fa fa-heading text-white font-size-20"></i>
                      </div>
                    </div>
                    <div className="feed-item-list">
                      <div>
                        <h5 className="font-size-16 mb-1">Tiêu đề bài viết</h5>
                        <p className="text-muted text-truncate mb-4">Người dùng sẽ thấy tiêu đề đầu tiên</p>
                        <div className="mb-3">
                          <div>
                            <div className="row" style={{ marginTop: '20px' }}>
                              <div className="col-lg-12">
                                <div className="mb-3">
                                  <label className="form-label" htmlFor="Title">Tiêu đề bài viết</label>
                                  <input type="text" className="form-control" placeholder="Nhập tiêu đề" required name="name" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="checkout-item">
                    <div className="avatar checkout-icon p-1">
                      <div className="avatar-title rounded-circle bg-primary">
                        <i className="fa fa-align-justify text-white font-size-20"></i>
                      </div>
                    </div>
                    <div className="feed-item-list">
                      <div>
                        <h5 className="font-size-16 mb-1">Nội dung bài viết</h5>
                        <p className="text-muted text-truncate mb-4">Bạn nên viết ở định dạng HTML kết hợp CSS</p>
                        <div className="mb-3">
                          <div>
                            <div className="row" style={{ marginTop: '20px' }}>
                              <div className="col-lg-12">
                                <div className="mb-3">
                                  <label className="form-label">Nội dung bài viết</label>
                                  <CKEditor
                                    editor={ClassicEditor}
                                    data={editorData}
                                    onChange={(event, editor) => {
                                      const data = editor.getData();
                                      setEditorData(data);
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <label className="form-label" style={{ fontStyle: 'italic', color: '#ff6347' }}>Bài viết của bạn sẽ được duyệt trong 3 ngày trước khi được đăng lên.</label>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            <div className="row my-4">
              <div className="col">
                <div className="text-end mt-2 mt-sm-0">
                  <button className="btn bx bx-receipt me-1" style={{ fontFamily: 'Inter, sans-serif !important', backgroundColor: '#3b5d50' }}>
                    <div className="fa fa-file-lines"></div> Đăng bài viết
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};



export default BlogPostForm;