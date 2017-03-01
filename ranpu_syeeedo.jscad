function getParameterDefinitions() {
  return [
    { name: 'kabe1', type: 'text', initial: '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111', caption: '壁1' },
    { name: 'kabe2', type: 'text', initial: '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111', caption: '壁2' },
    { name: 'kabe3', type: 'text', initial: '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111', caption: '壁3' },
    { name: 'kabe4', type: 'text', initial: '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111', caption: '壁4' },    
    ];
}

function main(p) {
    o = [];
    //外壁
    for(x=0; x<p.kabe1.length; x++){
        if(p.kabe1[x]==1)o.push(cube({size: [1,1,1]}).translate([x%10,0,floor(x/10)]));
    }
    for(x=0; x<p.kabe2.length; x++){
        if(p.kabe2[x]==1)o.push(cube({size: [1,1,1]}).translate([-1,(x%10),floor(x/10)]));
    }
    for(x=0; x<p.kabe3.length; x++){
        if(p.kabe3[x]==1)o.push(cube({size: [1,1,1]}).translate([x%10,9,floor(x/10)]));
    }
    for(x=0; x<p.kabe4.length; x++){
        if(p.kabe4[x]==1)o.push(cube({size: [1,1,1]}).translate([10,x%10,floor(x/10)]));
    } 
    //天井
    for(y=0; y<10; y++){
            for(x=0; x<12; x++){
                o.push(cube({size: [1,1,1]}).translate([x-1,y,10]));
            }
    }
    
    return union(o).translate([-5,-5,0]).scale([2.5,2.5,4]);
}