function num(arr) {
    let countLike = 0;
    let countDislike = 0;


    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 'like'){
            countLike++
        }else if (arr[i] === 'dislike') {
            countDislike++
        }
        console.log('likelar', countLike + 'ta');
        console.log('dislikelar', countLike + 'ta');
        if (countLike > countDislike) {
            return true
        }else if (countLike < countDislike) {
            return false
        }
    }
}

console.log(num(['like', 'dislike', 'like', 'dislike', 'like','dislike', 'like','dislike', 'like','dislike', 'like', 'dislike', 'like', 'dislike', 'like', 'dislike', 'like', 'dislike', 'like', 'dislike', 'like']));