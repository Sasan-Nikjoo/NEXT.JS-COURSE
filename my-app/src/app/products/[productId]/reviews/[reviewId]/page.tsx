// nested Dynamic routes by having Dynamic segments in the folder names
export default function ReviewDetail({
    params,
}: {
    params: {
    productId: string;
    reviewId: string;
};

})
{
    return<h1>
        Review{params.reviewId} for the product {params.productId}
    </h1>
}