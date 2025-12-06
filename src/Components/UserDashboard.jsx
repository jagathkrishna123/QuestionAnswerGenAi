import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle, Loader, X, Download, Eye, Trash2, LogOut } from 'lucide-react';

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState('upload');
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [error, setError] = useState('');
  const [dragActive, setDragActive] = useState(false);

  // Mock data for generated notes
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Computer Science Fundamentals',
      status: 'completed',
      createdAt: '2024-12-05',
      topics: ['Data Structures', 'Algorithms', 'OOP'],
      size: '2.4 MB'
    },
    {
      id: 2,
      title: 'Web Development Syllabus',
      status: 'processing',
      createdAt: '2024-12-06',
      topics: ['HTML', 'CSS', 'JavaScript'],
      size: '-'
    },
    {
      id: 3,
      title: 'Machine Learning Notes',
      status: 'completed',
      createdAt: '2024-12-04',
      topics: ['Neural Networks', 'Deep Learning', 'AI'],
      size: '3.1 MB'
    }
  ]);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (file) => {
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      setError('');
      if (!title) {
        setTitle(file.name.replace('.pdf', ''));
      }
    } else {
      setError('Please select a valid PDF file');
      setSelectedFile(null);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Please select a file');
      return;
    }
    if (!title.trim()) {
      setError('Please enter a title');
      return;
    }

    setUploading(true);
    setError('');

    // Simulate upload process
    setTimeout(() => {
      setUploading(false);
      setUploadSuccess(true);
      
      // Add to notes list
      const newNote = {
        id: notes.length + 1,
        title: title,
        status: 'processing',
        createdAt: new Date().toISOString().split('T')[0],
        topics: [],
        size: '-'
      };
      setNotes([newNote, ...notes]);

      // Reset form after 2 seconds
      setTimeout(() => {
        setUploadSuccess(false);
        setSelectedFile(null);
        setTitle('');
        setActiveTab('files');
      }, 2000);
    }, 3000);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      setNotes(notes.filter(note => note.id !== id));
    }
  };

  const getStatusBadge = (status) => {
    const styles = {
      completed: 'bg-green-100 text-green-800',
      processing: 'bg-yellow-100 text-yellow-800',
      failed: 'bg-red-100 text-red-800'
    };
    
    const icons = {
      completed: <CheckCircle className="w-4 h-4" />,
      processing: <Loader className="w-4 h-4 animate-spin" />,
      failed: <AlertCircle className="w-4 h-4" />
    };

    return (
      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${styles[status]}`}>
        {icons[status]}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      {/* <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <FileText className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">NotesGen AI</h1>
                <p className="text-sm text-gray-600">Welcome back, Student!</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-red-600 transition">
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </header> */}

      {/* Navigation Tabs */}
      <div className="bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('upload')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition ${
                activeTab === 'upload'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Upload Syllabus
            </button>
            <button
              onClick={() => setActiveTab('files')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition ${
                activeTab === 'files'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              All Files ({notes.length})
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'upload' ? (
          <div className="max-w-5xl mx-auto">
            {/* Upload Card */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-500 mb-6">Upload Syllabus PDF</h2>
              
              {/* Title Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Note Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Computer Science Semester 1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              {/* Drag and Drop Area */}
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-lg p-12 text-center transition ${
                  dragActive
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {selectedFile ? (
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                      <FileText className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <p className="text-lg font-medium text-gray-900">{selectedFile.name}</p>
                      <p className="text-sm text-gray-600">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedFile(null)}
                      className="inline-flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700 transition"
                    >
                      <X className="w-4 h-4" />
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full">
                      <Upload className="w-8 h-8 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-lg font-medium text-gray-600 mb-2">
                        Drag and drop your PDF here
                      </p>
                      <p className="text-sm text-gray-600 mb-4">or</p>
                      <label className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition">
                        <Upload className="w-5 h-5 mr-2" />
                        Browse Files
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={handleFileInput}
                          className="hidden"
                        />
                      </label>
                    </div>
                    <p className="text-xs text-gray-500">
                      Maximum file size: 10MB • Supported format: PDF only
                    </p>
                  </div>
                )}
              </div>

              {/* Error Message */}
              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              )}

              {/* Success Message */}
              {uploadSuccess && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-sm text-green-800">
                    Syllabus uploaded successfully! Generating notes...
                  </p>
                </div>
              )}

              {/* Upload Button */}
              <button
                onClick={handleUpload}
                disabled={!selectedFile || uploading}
                className={`mt-6 w-full py-4 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
                  !selectedFile || uploading
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {uploading ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Upload className="w-5 h-5" />
                    Generate Notes
                  </>
                )}
              </button>

              {/* Info Box */}
              <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">How it works:</h3>
                <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                  <li>Upload your course syllabus in PDF format</li>
                  <li>Our AI analyzes the topics and structure</li>
                  <li>Comprehensive notes are generated automatically</li>
                  <li>Download your formatted PDF notes</li>
                </ol>
              </div>
            </div>
          </div>
        ) : (
          /* All Files Tab */
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">My Generated Notes</h2>
              <p className="text-gray-600 mt-1">Manage all your generated notes</p>
            </div>

            {/* Notes Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {notes.map((note) => (
                <div key={note.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-4">
                    <FileText className="w-10 h-10 text-blue-600" />
                    {getStatusBadge(note.status)}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {note.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-600">
                      Created: {new Date(note.createdAt).toLocaleDateString()}
                    </p>
                    {note.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {note.topics.slice(0, 3).map((topic, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {topic}
                          </span>
                        ))}
                        {note.topics.length > 3 && (
                          <span className="text-xs text-gray-500 px-2 py-1">
                            +{note.topics.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                    <p className="text-sm text-gray-600">Size: {note.size}</p>
                  </div>

                  <div className="flex gap-2 pt-4 border-t">
                    <button
                      disabled={note.status !== 'completed'}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                        note.status === 'completed'
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                    <button
                      disabled={note.status !== 'completed'}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                        note.status === 'completed'
                          ? 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                          : 'border border-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(note.id)}
                      className="px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {notes.length === 0 && (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No notes yet</h3>
                <p className="text-gray-600 mb-6">Upload your first syllabus to get started</p>
                <button
                  onClick={() => setActiveTab('upload')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Upload Syllabus
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}