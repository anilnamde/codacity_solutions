'use strict';

/* global $, jQuery */

const getCommentMarkup = (comment) => {
    if (!comment) return '';
    return `
        <div class="comment-item">
            <div class="comment-item__username">${comment.username}</div>
            <div class="comment-item__message">${comment.message}</div>
        </div>
    `;
}

const fetchComments = ($commentList) => {
    const url = `https://www.example.com/comments?count=${$commentList.data('count')}`;
    // $commentList.text('');
    // $commentList.text('Loading...');
    console.log('>>>> text ', $commentList.text());
    return fetch(url)
        .then((response) => {
            if (response.status !== 200) {
                // $commentList.text('Error occured...');
                return;
            }

            // Examine the text in the response
            response.json().then(function (data) {
                console.log('>> ', data);
                data.forEach((commentNode) => {
                    $commentList.append(getCommentMarkup(commentNode));
                })
            });
        }).catch(function (err) {
            $commentList.text('Error occured...');
        });
}

function solution() {
    // test getCommentMarkup
    // console.log('===>>> ', getCommentMarkup({
    // "id": 123,
    // "username": "User 1",
    // "message": "Cool product!"
    // }));

    // test fetchComments
    // fetchComments(1)
    //     .then((response) => {
    //         if (response.status !== 200) {
    //             console.log('*** Looks like there was a problem. Status Code: ' + response.status);
    //             return;
    //         }

    //         // Examine the text in the response
    //         response.json().then(function(data) {
    //             console.log('>> ', data);
    //         });
    //     }).
    //     .catch(function(err) {
    //         console.log('>> Fetch Error :-S', err);
    //     });

    //<div class="comment-list" data-count=10></div>
    // console.log('>>>>> ', $('.comment-list').size())

    $('.comment-list').each(function (index) {
        const $commentList = $(this);
        console.log('each >> ', index, $commentList.data('count'), $commentList.text());
        // loading test not passing for this
        // fetchComments($commentList)
        $.ajax({
            url: `https://www.example.com/comments?count=${$commentList.data('count')}`,
            beforeSend: function () {
                console.log('===> bs >>>  ')
                $commentList.text('Loading...');
            },
            success: function (data) {
                console.log('===> succ >>> ', data)
                data.forEach((commentNode) => {
                    $commentList.append(getCommentMarkup(commentNode));
                })
            }
        });
    })
}