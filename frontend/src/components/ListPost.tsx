import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function ListPost() {
    return (
      <div className="border-1 border-gray-500 rounded-lg p-2">
        <p><small>by: user123</small></p>
        <p className="text-lg font-bold">Post header</p>
        <p className="mb-2">Post content</p>
        
        <hr className="text-gray-400" />
        <p><FavoriteBorderIcon className="text-red-500" /> <small>100</small></p>
      </div>
    )
  }
  
  export default ListPost;
  