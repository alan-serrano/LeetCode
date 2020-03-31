/**
 * @param {number[]} prices
 * @return {number}
 */


var maxProfit = findMaxProfit2;

/**
* Time Complexity = O(n^2);
* Space Complexity = O(1)
*/
function findMaxProfit1(prices) {
    let max = 0;
    for( let i = 0; i < prices.length - 1; i++ ) {
        for( let j = i + 1; j < prices.length; j++ ) {
            if( prices[j] - prices[i] > max ) {
                max = prices[j] - prices[i];
            }
        }
    }
    
    return max;
};

/**
* Time Complexity = O(n);
* Space Complexity = O(1)
*/
function findMaxProfit2(prices) {
    let maxProfit = 0;
    let minPrice = Number.MAX_SAFE_INTEGER;
    
    for( let i = 0; i < prices.length; i++ ) {
        if( prices[i] < minPrice ) {
            minPrice = prices[i];
        } else if( prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    
    return maxProfit;
}