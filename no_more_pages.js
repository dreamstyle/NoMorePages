/** 
 ** === Code Principle ===
 ** 1. Make it works.
 ** 2. Make it amazing.
 ** 3. Make it perfect.
 **
 **/

var suspicious_list = $('body').find('ul').find('li').find('a'); // will return a jQuery object
var target;

var pagination = {
	list: [],
	exist: false,
	search: function(){
		suspicious_list.each(function(index){
			if( $(this).text() === '2' ){
				console.log($(this));
				target = $(this).closest('ul');
				console.log(target);
				pagination.exist = true;
			}
			if( pagination.exist ){
				return;
			}
		});
	},

	save: function(){
		target = target.find('li').find('a');
		console.log(target);
		target.each(function(index){
			var start_position = $(this).attr('href').search('\\?');
			var end_position = $(this).attr('href').length;
			var trim_path = $(this).attr('href').slice(start_position, end_position);
			var full_path = location.protocol.concat("//").concat(location.hostname).concat(location.pathname).concat(trim_path);
			pagination.list.push(full_path);
		});
		console.log('pagination.list: ' + pagination.list);
	}
}

pagination.search();
if( pagination.exist ){
	pagination.save();
}