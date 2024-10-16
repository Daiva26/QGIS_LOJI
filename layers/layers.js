var wms_layers = [];


        var lyr_GOOGLEMAPS_0 = new ol.layer.Tile({
            'title': 'GOOGLE MAPS',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_TIPEHAK_1 = new ol.format.GeoJSON();
var features_TIPEHAK_1 = format_TIPEHAK_1.readFeatures(json_TIPEHAK_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TIPEHAK_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIPEHAK_1.addFeatures(features_TIPEHAK_1);
var lyr_TIPEHAK_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TIPEHAK_1, 
                style: style_TIPEHAK_1,
                popuplayertitle: "TIPEHAK",
                interactive: true,
    title: 'TIPEHAK<br />\
    <img src="styles/legend/TIPEHAK_1_0.png" /> Hak Guna Bangunan<br />\
    <img src="styles/legend/TIPEHAK_1_1.png" /> Hak Milik<br />\
    <img src="styles/legend/TIPEHAK_1_2.png" /> Hak Pakai<br />\
    <img src="styles/legend/TIPEHAK_1_3.png" /> Hak Wakaf<br />\
    <img src="styles/legend/TIPEHAK_1_4.png" /> Kosong<br />\
    <img src="styles/legend/TIPEHAK_1_5.png" /> <br />'
        });
var format_NIB_NOP_NBT_2 = new ol.format.GeoJSON();
var features_NIB_NOP_NBT_2 = format_NIB_NOP_NBT_2.readFeatures(json_NIB_NOP_NBT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NIB_NOP_NBT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NIB_NOP_NBT_2.addFeatures(features_NIB_NOP_NBT_2);
var lyr_NIB_NOP_NBT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NIB_NOP_NBT_2, 
                style: style_NIB_NOP_NBT_2,
                popuplayertitle: "NIB_NOP_NBT",
                interactive: true,
    title: 'NIB_NOP_NBT<br />\
    <img src="styles/legend/NIB_NOP_NBT_2_0.png" /> NOP<br />\
    <img src="styles/legend/NIB_NOP_NBT_2_1.png" /> -<br />'
        });
var format_NBT_LOJI_3 = new ol.format.GeoJSON();
var features_NBT_LOJI_3 = format_NBT_LOJI_3.readFeatures(json_NBT_LOJI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NBT_LOJI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NBT_LOJI_3.addFeatures(features_NBT_LOJI_3);
var lyr_NBT_LOJI_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NBT_LOJI_3, 
                style: style_NBT_LOJI_3,
                popuplayertitle: "NBT_LOJI",
                interactive: true,
    title: 'NBT_LOJI<br />\
    <img src="styles/legend/NBT_LOJI_3_0.png" /> 732425 - 2371609<br />\
    <img src="styles/legend/NBT_LOJI_3_1.png" /> 2371609 - 2614968<br />\
    <img src="styles/legend/NBT_LOJI_3_2.png" /> 2614968 - 2871749<br />\
    <img src="styles/legend/NBT_LOJI_3_3.png" /> 2871749 - 3195459<br />\
    <img src="styles/legend/NBT_LOJI_3_4.png" /> 3195459 - 3581824<br />\
    <img src="styles/legend/NBT_LOJI_3_5.png" /> 3581824 - 3920607<br />\
    <img src="styles/legend/NBT_LOJI_3_6.png" /> 3920607 - 4496597<br />\
    <img src="styles/legend/NBT_LOJI_3_7.png" /> 4496597 - 12845187<br />'
        });
var format_Toponimi_4 = new ol.format.GeoJSON();
var features_Toponimi_4 = format_Toponimi_4.readFeatures(json_Toponimi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toponimi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toponimi_4.addFeatures(features_Toponimi_4);
var lyr_Toponimi_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toponimi_4, 
                style: style_Toponimi_4,
                popuplayertitle: "Toponimi",
                interactive: true,
                title: '<img src="styles/legend/Toponimi_4.png" /> Toponimi'
            });
var format_RS_5 = new ol.format.GeoJSON();
var features_RS_5 = format_RS_5.readFeatures(json_RS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RS_5.addFeatures(features_RS_5);
var lyr_RS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RS_5, 
                style: style_RS_5,
                popuplayertitle: "RS",
                interactive: true,
                title: '<img src="styles/legend/RS_5.png" /> RS'
            });
var format_Pemerintah_6 = new ol.format.GeoJSON();
var features_Pemerintah_6 = format_Pemerintah_6.readFeatures(json_Pemerintah_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemerintah_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemerintah_6.addFeatures(features_Pemerintah_6);
var lyr_Pemerintah_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemerintah_6, 
                style: style_Pemerintah_6,
                popuplayertitle: "Pemerintah",
                interactive: true,
                title: '<img src="styles/legend/Pemerintah_6.png" /> Pemerintah'
            });
var format_Pendidikan_7 = new ol.format.GeoJSON();
var features_Pendidikan_7 = format_Pendidikan_7.readFeatures(json_Pendidikan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pendidikan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendidikan_7.addFeatures(features_Pendidikan_7);
var lyr_Pendidikan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pendidikan_7, 
                style: style_Pendidikan_7,
                popuplayertitle: "Pendidikan",
                interactive: true,
                title: '<img src="styles/legend/Pendidikan_7.png" /> Pendidikan'
            });
var format_Peribadatan_8 = new ol.format.GeoJSON();
var features_Peribadatan_8 = format_Peribadatan_8.readFeatures(json_Peribadatan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peribadatan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peribadatan_8.addFeatures(features_Peribadatan_8);
var lyr_Peribadatan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Peribadatan_8, 
                style: style_Peribadatan_8,
                popuplayertitle: "Peribadatan",
                interactive: true,
                title: '<img src="styles/legend/Peribadatan_8.png" /> Peribadatan'
            });
var format_Jalan_BogBar_9 = new ol.format.GeoJSON();
var features_Jalan_BogBar_9 = format_Jalan_BogBar_9.readFeatures(json_Jalan_BogBar_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_BogBar_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_BogBar_9.addFeatures(features_Jalan_BogBar_9);
var lyr_Jalan_BogBar_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_BogBar_9, 
                style: style_Jalan_BogBar_9,
                popuplayertitle: "Jalan_BogBar",
                interactive: false,
                title: '<img src="styles/legend/Jalan_BogBar_9.png" /> Jalan_BogBar'
            });
var format_Sungai_BoBar_10 = new ol.format.GeoJSON();
var features_Sungai_BoBar_10 = format_Sungai_BoBar_10.readFeatures(json_Sungai_BoBar_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_BoBar_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_BoBar_10.addFeatures(features_Sungai_BoBar_10);
var lyr_Sungai_BoBar_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_BoBar_10, 
                style: style_Sungai_BoBar_10,
                popuplayertitle: "Sungai_BoBar",
                interactive: false,
                title: '<img src="styles/legend/Sungai_BoBar_10.png" /> Sungai_BoBar'
            });

lyr_GOOGLEMAPS_0.setVisible(true);lyr_TIPEHAK_1.setVisible(true);lyr_NIB_NOP_NBT_2.setVisible(true);lyr_NBT_LOJI_3.setVisible(true);lyr_Toponimi_4.setVisible(true);lyr_RS_5.setVisible(true);lyr_Pemerintah_6.setVisible(true);lyr_Pendidikan_7.setVisible(true);lyr_Peribadatan_8.setVisible(true);lyr_Jalan_BogBar_9.setVisible(true);lyr_Sungai_BoBar_10.setVisible(true);
var layersList = [lyr_GOOGLEMAPS_0,lyr_TIPEHAK_1,lyr_NIB_NOP_NBT_2,lyr_NBT_LOJI_3,lyr_Toponimi_4,lyr_RS_5,lyr_Pemerintah_6,lyr_Pendidikan_7,lyr_Peribadatan_8,lyr_Jalan_BogBar_9,lyr_Sungai_BoBar_10];
lyr_TIPEHAK_1.set('fieldAliases', {'TIPEHAK': 'TIPEHAK', 'NIB': 'NIB', 'L_TEKSTUAL': 'L_TEKSTUAL', 'L_SPASIAL': 'L_SPASIAL', 'Nama_Subje': 'Nama_Subje', 'Nomor_Obje': 'Nomor_Obje', 'Nama_Wajib': 'Nama_Wajib', 'NIK': 'NIK', 'Predicted': 'Predicted', });
lyr_NIB_NOP_NBT_2.set('fieldAliases', {'TIPEHAK': 'TIPEHAK', 'NIB': 'NIB', 'L_TEKSTUAL': 'L_TEKSTUAL', 'L_SPASIAL': 'L_SPASIAL', 'Nama_Subje': 'Nama_Subje', 'Nomor_Obje': 'Nomor_Obje', 'Nama_Wajib': 'Nama_Wajib', 'NIK': 'NIK', 'Predicted': 'Predicted', });
lyr_NBT_LOJI_3.set('fieldAliases', {'NIB': 'NIB', 'Predicted': 'Predicted', });
lyr_Toponimi_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'NMLAIN': 'NMLAIN', 'ARTINAM': 'ARTINAM', 'FTYPE': 'FTYPE', 'KLSTPN': 'KLSTPN', 'KOORDINAT1': 'KOORDINAT1', 'KOORDINAT2': 'KOORDINAT2', 'NAMGAZ': 'NAMGAZ', 'NAMLOK': 'NAMLOK', 'NAMMAP': 'NAMMAP', 'NAMSPE': 'NAMSPE', 'SJHNAM': 'SJHNAM', 'UCAP1': 'UCAP1', 'UCAP2': 'UCAP2', 'ASLBHS': 'ASLBHS', 'ELEVAS': 'ELEVAS', 'KOORDX': 'KOORDX', 'KOORDY': 'KOORDY', });
lyr_RS_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'JPLYRS': 'JPLYRS', 'RSALAMAT': 'RSALAMAT', 'TIPRST': 'TIPRST', });
lyr_Pemerintah_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'FGSFNP': 'FGSFNP', });
lyr_Pendidikan_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KODEBP': 'KODEBP', 'STSPML': 'STSPML', 'JJGPDF': 'JJGPDF', 'JLPDDK': 'JLPDDK', 'JNSPDK': 'JNSPDK', 'FGDPDK': 'FGDPDK', });
lyr_Peribadatan_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'FGSPRP': 'FGSPRP', });
lyr_Jalan_BogBar_9.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID_3': 'OBJECTID_3', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ARHRJL': 'ARHRJL', 'AUTRJL': 'AUTRJL', 'FGSRJL': 'FGSRJL', 'JARRJL': 'JARRJL', 'JPARJL': 'JPARJL', 'KLLRJL': 'KLLRJL', 'KONRJL': 'KONRJL', 'KPMSTR': 'KPMSTR', 'LKONOF': 'LKONOF', 'LKSBSP': 'LKSBSP', 'LKSRTA': 'LKSRTA', 'LLHRRT': 'LLHRRT', 'LOCRJL': 'LOCRJL', 'LBRBHJ': 'LBRBHJ', 'LBRJLN': 'LBRJLN', 'MATRJL': 'MATRJL', 'MEDRJL': 'MEDRJL', 'SPCRJL': 'SPCRJL', 'STARJL': 'STARJL', 'TOLRJL': 'TOLRJL', 'UTKRJL': 'UTKRJL', 'VLCPRT': 'VLCPRT', 'WLYRJL': 'WLYRJL', 'TGL_SK': 'TGL_SK', 'JLNLYG': 'JLNLYG', 'KLSRJL': 'KLSRJL', 'SHAPE_Leng': 'SHAPE_Leng', 'OBJECTID_4': 'OBJECTID_4', 'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'NOMOR_PETA': 'NOMOR_PETA', 'No_urut': 'No_urut', 'Shape_Le_1': 'Shape_Le_1', 'KET': 'KET', 'LAYER': 'LAYER', 'KET_META': 'KET_META', 'ORIG_FID': 'ORIG_FID', 'Shape_Le_2': 'Shape_Le_2', 'Keterangan': 'Keterangan', 'Lebar': 'Lebar', 'Shape_Le_3': 'Shape_Le_3', 'Shape_Le_4': 'Shape_Le_4', });
lyr_Sungai_BoBar_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADATGL': 'ADATGL', 'DMAX': 'DMAX', 'FNGAIR': 'FNGAIR', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'LTKSGI': 'LTKSGI', 'NAMWS': 'NAMWS', 'STATUS': 'STATUS', 'UKRSGI': 'UKRSGI', 'WMAX': 'WMAX', 'DBTMXS': 'DBTMXS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_TIPEHAK_1.set('fieldImages', {'TIPEHAK': 'TextEdit', 'NIB': 'TextEdit', 'L_TEKSTUAL': 'TextEdit', 'L_SPASIAL': 'TextEdit', 'Nama_Subje': 'TextEdit', 'Nomor_Obje': 'TextEdit', 'Nama_Wajib': 'TextEdit', 'NIK': 'TextEdit', 'Predicted': 'TextEdit', });
lyr_NIB_NOP_NBT_2.set('fieldImages', {'TIPEHAK': 'TextEdit', 'NIB': 'TextEdit', 'L_TEKSTUAL': 'TextEdit', 'L_SPASIAL': 'TextEdit', 'Nama_Subje': 'TextEdit', 'Nomor_Obje': 'TextEdit', 'Nama_Wajib': 'TextEdit', 'NIK': 'TextEdit', 'Predicted': 'TextEdit', });
lyr_NBT_LOJI_3.set('fieldImages', {'NIB': 'TextEdit', 'Predicted': 'TextEdit', });
lyr_Toponimi_4.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'NMLAIN': '', 'ARTINAM': '', 'FTYPE': '', 'KLSTPN': '', 'KOORDINAT1': '', 'KOORDINAT2': '', 'NAMGAZ': '', 'NAMLOK': '', 'NAMMAP': '', 'NAMSPE': '', 'SJHNAM': '', 'UCAP1': '', 'UCAP2': '', 'ASLBHS': '', 'ELEVAS': '', 'KOORDX': '', 'KOORDY': '', });
lyr_RS_5.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'JPLYRS': '', 'RSALAMAT': '', 'TIPRST': '', });
lyr_Pemerintah_6.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'FGSFNP': '', });
lyr_Pendidikan_7.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KODEBP': '', 'STSPML': '', 'JJGPDF': '', 'JLPDDK': '', 'JNSPDK': '', 'FGDPDK': '', });
lyr_Peribadatan_8.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'FGSPRP': '', });
lyr_Jalan_BogBar_9.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID_2': '', 'OBJECTID_3': '', 'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'ARHRJL': '', 'AUTRJL': '', 'FGSRJL': '', 'JARRJL': '', 'JPARJL': '', 'KLLRJL': '', 'KONRJL': '', 'KPMSTR': '', 'LKONOF': '', 'LKSBSP': '', 'LKSRTA': '', 'LLHRRT': '', 'LOCRJL': '', 'LBRBHJ': '', 'LBRJLN': '', 'MATRJL': '', 'MEDRJL': '', 'SPCRJL': '', 'STARJL': '', 'TOLRJL': '', 'UTKRJL': '', 'VLCPRT': '', 'WLYRJL': '', 'TGL_SK': '', 'JLNLYG': '', 'KLSRJL': '', 'SHAPE_Leng': '', 'OBJECTID_4': '', 'Join_Count': '', 'TARGET_FID': '', 'NOMOR_PETA': '', 'No_urut': '', 'Shape_Le_1': '', 'KET': '', 'LAYER': '', 'KET_META': '', 'ORIG_FID': '', 'Shape_Le_2': '', 'Keterangan': '', 'Lebar': '', 'Shape_Le_3': '', 'Shape_Le_4': '', });
lyr_Sungai_BoBar_10.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'ADATGL': '', 'DMAX': '', 'FNGAIR': '', 'JNSSNG': '', 'KLSSNG': '', 'LTKSGI': '', 'NAMWS': '', 'STATUS': '', 'UKRSGI': '', 'WMAX': '', 'DBTMXS': '', 'NAMDAS': '', 'SHAPE_Leng': '', });
lyr_TIPEHAK_1.set('fieldLabels', {'TIPEHAK': 'header label - visible with data', 'NIB': 'header label - visible with data', 'L_TEKSTUAL': 'header label - visible with data', 'L_SPASIAL': 'header label - visible with data', 'Nama_Subje': 'header label - visible with data', 'Nomor_Obje': 'header label - visible with data', 'Nama_Wajib': 'header label - visible with data', 'NIK': 'header label - visible with data', 'Predicted': 'header label - visible with data', });
lyr_NIB_NOP_NBT_2.set('fieldLabels', {'TIPEHAK': 'header label - visible with data', 'NIB': 'header label - visible with data', 'L_TEKSTUAL': 'header label - visible with data', 'L_SPASIAL': 'inline label - visible with data', 'Nama_Subje': 'header label - visible with data', 'Nomor_Obje': 'header label - visible with data', 'Nama_Wajib': 'header label - visible with data', 'NIK': 'header label - visible with data', 'Predicted': 'header label - visible with data', });
lyr_NBT_LOJI_3.set('fieldLabels', {'NIB': 'header label - visible with data', 'Predicted': 'header label - visible with data', });
lyr_Toponimi_4.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'NMLAIN': 'no label', 'ARTINAM': 'no label', 'FTYPE': 'no label', 'KLSTPN': 'no label', 'KOORDINAT1': 'no label', 'KOORDINAT2': 'no label', 'NAMGAZ': 'no label', 'NAMLOK': 'no label', 'NAMMAP': 'no label', 'NAMSPE': 'no label', 'SJHNAM': 'no label', 'UCAP1': 'no label', 'UCAP2': 'no label', 'ASLBHS': 'no label', 'ELEVAS': 'no label', 'KOORDX': 'no label', 'KOORDY': 'no label', });
lyr_RS_5.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'JPLYRS': 'no label', 'RSALAMAT': 'no label', 'TIPRST': 'no label', });
lyr_Pemerintah_6.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'FGSFNP': 'no label', });
lyr_Pendidikan_7.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KODEBP': 'no label', 'STSPML': 'no label', 'JJGPDF': 'no label', 'JLPDDK': 'no label', 'JNSPDK': 'no label', 'FGDPDK': 'no label', });
lyr_Peribadatan_8.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'FGSPRP': 'no label', });
lyr_Jalan_BogBar_9.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID_3': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ARHRJL': 'no label', 'AUTRJL': 'no label', 'FGSRJL': 'no label', 'JARRJL': 'no label', 'JPARJL': 'no label', 'KLLRJL': 'no label', 'KONRJL': 'no label', 'KPMSTR': 'no label', 'LKONOF': 'no label', 'LKSBSP': 'no label', 'LKSRTA': 'no label', 'LLHRRT': 'no label', 'LOCRJL': 'no label', 'LBRBHJ': 'no label', 'LBRJLN': 'no label', 'MATRJL': 'no label', 'MEDRJL': 'no label', 'SPCRJL': 'no label', 'STARJL': 'no label', 'TOLRJL': 'no label', 'UTKRJL': 'no label', 'VLCPRT': 'no label', 'WLYRJL': 'no label', 'TGL_SK': 'no label', 'JLNLYG': 'no label', 'KLSRJL': 'no label', 'SHAPE_Leng': 'no label', 'OBJECTID_4': 'no label', 'Join_Count': 'no label', 'TARGET_FID': 'no label', 'NOMOR_PETA': 'no label', 'No_urut': 'no label', 'Shape_Le_1': 'no label', 'KET': 'no label', 'LAYER': 'no label', 'KET_META': 'no label', 'ORIG_FID': 'no label', 'Shape_Le_2': 'no label', 'Keterangan': 'no label', 'Lebar': 'no label', 'Shape_Le_3': 'no label', 'Shape_Le_4': 'no label', });
lyr_Sungai_BoBar_10.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ADATGL': 'no label', 'DMAX': 'no label', 'FNGAIR': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'LTKSGI': 'no label', 'NAMWS': 'no label', 'STATUS': 'no label', 'UKRSGI': 'no label', 'WMAX': 'no label', 'DBTMXS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Sungai_BoBar_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});