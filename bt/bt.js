let movies = [];
//lấy value của thẻ tiêu đề phim và value thẻ lý do / thẻ lưu danh sách
let valueNameMovie = document.getElementById("text");
let valueWhyMovie = document.getElementById("why");
let valueListMovie = document.getElementById("list");


//reder vào thẻ danh sách phim 
let render =() =>{
    //XUẤT THẺ LOCAL HIỆN ĐÃ LƯU VÀO TRONG ĐÓ
    movies = JSON.parse(localStorage.getItem("movies")) || []
    //làm mới mỗi lần nhập tiêu đề phim xong 
    valueNameMovie.value="";
    valueWhyMovie.value="";

    let conten = "";

    //dùng thẻ movies.forEach để lọc các thẻ trong movie
    movies.forEach((el) => {
        conten +=
        `tên phim : ${el.valueNameMovie} , lý do: ${el.valueWhyMovie}\n`

    });
    //nhét vào danh sách
    valueListMovie.value = conten;
}
render();

//save
let buttonSave = document.getElementById("save");

buttonSave.addEventListener("click",()=>{
    let newMovis=
    {name: valueNameMovie.value,
    list:valueListMovie.value,
    };
    movies.push(newMovis);

    valueNameMovie.value="";
    valueWhyMovie.value="";
    //lưu vào local
    localStorage.setItem("movies",JSON.stringify(movies));
    render();
});

//xoá
let button_delete = document.getElementById("delete");
//xoá hết
//dựa vào vị trí xoá hết
let deletee = () =>{
    buttonSave.addEventListener("click",() =>{
        let index = movies.findIndex((el) => {});
        movies.pop();
        //kuw vao local
        localStorage.setItem("movie",JSON.stringify(movies));
    })
}
