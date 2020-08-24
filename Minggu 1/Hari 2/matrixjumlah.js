var run = function () {
	var x = 
	[
		[ 4, 2],
		[ 1, 6]
	];
	var xx = 
	[
		[ 1, 1],
		[ 9, 4]
	];	
	console.log( "Matrix A:" );
	console.table( x );
	console.log("");
	
	console.log( "Matrix B:" );
	console.table( xx );
	console.log("");
	
	console.log( "Sum of Matrix A + Matrix B:" );
	var Res = sum( x, xx );
	console.table( Res );
}
function sum( a, b ) {
	var result = [];
	result = new Array( a.length );
	for ( var i = 0; i < result.length; i++ ) {
		
		result[ i ] = new Array( a[ i ].length );
		for ( var j = 0; j < result[ i ].length; j++ ) {
			
			result[ i ][ j ] = a[ i ][ j ] + b[ i ][ j ];
		}
	}
	return result;
}

run();