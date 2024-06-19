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
                   
                    <div className="feed-item-list">
                      <div>
                        <h5 className="font-size-16 mb-1">Article information</h5>
                        <p className="text-muted text-truncate mb-4">Article Title</p>
                        <div className="row" style={{ marginTop: '20px' }}>
                          <div className="col-lg-12">
                            <div className="mb-4 mb-lg-0">
                              <label className="form-label">What is the category of the article?</label>
                              <select className="form-control form-select" title="LoaiBai" id="LoạiBai" name="category" required>
                              <option value='marine'>Marine</option>
                              <option value='pirates'>Pirates</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <label className="form-label">Featured image of the article</label>
                          <div className="col-lg-3 col-sm-6" style={{ height: '120px', width: '180px' }}>
                            <div data-bs-toggle="collapse" style={{ height: '100%', width: '100%' }}>
                              <input type="file" id="fileUploadimage" name="avatar" style={{ display: 'none' }} data-allow-reorder="false" data-max-file-size="10MB" data-max-files="1" onChange={previewArrayImg} required />
                              <label className="card-radio-label" style={{ height: '100%', width: '100%' }}>
                                <span className="card-radio py-3 text-center text-truncate" onClick={(e) => { e.stopPropagation(); document.getElementById('fileUploadimage').click(); }} style={{ fontFamily: 'Inter, sans-serif !important', backgroundColor: 'FFAC33',borderRadius: '40%' }}>
                                  <i className="fa d-block h2 mb-3" ></i>
                                  Add Image
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
                    <div className="feed-item-list">
                      <div>
                        <h5 className="font-size-16 mb-1">Article Title</h5>
                        <p className="text-muted text-truncate mb-4">Users will see the first title</p>
                        <div className="mb-3">
                          <div>
                            <div className="row" style={{ marginTop: '20px' }}>
                              <div className="col-lg-12">
                                <div className="mb-3">
                                  <label className="form-label" htmlFor="Title">Article Title</label>
                                  <input type="text" className="form-control" placeholder="Enter title" required name="name" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="checkout-item">
                    <div className="feed-item-list">
                      <div>
                        <h5 className="font-size-16 mb-1">Main Content</h5>
                        <p className="text-muted text-truncate mb-4">You should write in HTML format combined with CSS</p>
                        <div className="mb-3">
                          <div>
                            <div className="row" style={{ marginTop: '20px' }}>
                              <div className="col-lg-12">
                                <div className="mb-3">
                                  <label className="form-label">Main Content</label>
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
                      <label className="form-label" style={{ fontStyle: 'italic', color: '#ff6347' }}>Your post will be reviewed within 30s before being published.</label>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            <div className="row my-4">
              <div className="col">
                <div className="text-end mt-2 mt-sm-0">
                  <button className="btn bx bx-receipt me-1" style={{ fontFamily: 'Inter, sans-serif !important', backgroundColor: 'FFAC33' }}>
                    <div className="fa fa-file-lines"></div> Post article
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