function accum(s) {
	return s.split('')
  .map((wd,i)=>(wd = wd.toLowerCase().repeat(i+1)) && wd.charAt(0).toUpperCase() + wd.slice(1))
  .join('-')
}
