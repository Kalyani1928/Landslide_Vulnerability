var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Analysis_1_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Analysis_1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Analysis_1_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8436610.447525, 3787089.556702, 8556779.247378, 3923142.829790]
                            })
                        });
var format_BUILDUP_2 = new ol.format.GeoJSON();
var features_BUILDUP_2 = format_BUILDUP_2.readFeatures(json_BUILDUP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUILDUP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUILDUP_2.addFeatures(features_BUILDUP_2);
var lyr_BUILDUP_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BUILDUP_2, 
                style: style_BUILDUP_2,
                interactive: true,
                title: '<img src="styles/legend/BUILDUP_2.png" /> BUILDUP'
            });
var format_MajorRoads_3 = new ol.format.GeoJSON();
var features_MajorRoads_3 = format_MajorRoads_3.readFeatures(json_MajorRoads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MajorRoads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorRoads_3.addFeatures(features_MajorRoads_3);
var lyr_MajorRoads_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MajorRoads_3, 
                style: style_MajorRoads_3,
                interactive: true,
                title: '<img src="styles/legend/MajorRoads_3.png" /> Major Roads'
            });
var format_SCHOOLS_4 = new ol.format.GeoJSON();
var features_SCHOOLS_4 = format_SCHOOLS_4.readFeatures(json_SCHOOLS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCHOOLS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCHOOLS_4.addFeatures(features_SCHOOLS_4);
var lyr_SCHOOLS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCHOOLS_4, 
                style: style_SCHOOLS_4,
                interactive: true,
                title: '<img src="styles/legend/SCHOOLS_4.png" /> SCHOOLS'
            });
var format_HOSPITALS_5 = new ol.format.GeoJSON();
var features_HOSPITALS_5 = format_HOSPITALS_5.readFeatures(json_HOSPITALS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOSPITALS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOSPITALS_5.addFeatures(features_HOSPITALS_5);
var lyr_HOSPITALS_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HOSPITALS_5, 
                style: style_HOSPITALS_5,
                interactive: true,
                title: '<img src="styles/legend/HOSPITALS_5.png" /> HOSPITALS'
            });
var format_CHAMBA_boundary_6 = new ol.format.GeoJSON();
var features_CHAMBA_boundary_6 = format_CHAMBA_boundary_6.readFeatures(json_CHAMBA_boundary_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHAMBA_boundary_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHAMBA_boundary_6.addFeatures(features_CHAMBA_boundary_6);
var lyr_CHAMBA_boundary_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CHAMBA_boundary_6, 
                style: style_CHAMBA_boundary_6,
                interactive: true,
                title: '<img src="styles/legend/CHAMBA_boundary_6.png" /> CHAMBA_boundary'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Analysis_1_1.setVisible(true);lyr_BUILDUP_2.setVisible(true);lyr_MajorRoads_3.setVisible(true);lyr_SCHOOLS_4.setVisible(true);lyr_HOSPITALS_5.setVisible(true);lyr_CHAMBA_boundary_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Analysis_1_1,lyr_BUILDUP_2,lyr_MajorRoads_3,lyr_SCHOOLS_4,lyr_HOSPITALS_5,lyr_CHAMBA_boundary_6];
lyr_BUILDUP_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'admin_leve': 'admin_leve', 'boundary': 'boundary', 'name': 'name', 'name_en': 'name_en', 'name_hi': 'name_hi', 'type': 'type', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', 'amenity': 'amenity', 'building': 'building', 'natural': 'natural', 'water': 'water', 'place': 'place', 'landuse': 'landuse', 'barrier': 'barrier', 'highway': 'highway', 'religion': 'religion', 'addr_city': 'addr_city', 'addr_postc': 'addr_postc', 'addr_stree': 'addr_stree', 'brand_wiki': 'brand_wiki', 'brand_wi_1': 'brand_wi_1', 'short_name': 'short_name', 'leisure': 'leisure', 'operator': 'operator', 'plant_meth': 'plant_meth', 'plant_outp': 'plant_outp', 'plant_sour': 'plant_sour', 'power': 'power', 'protect_cl': 'protect_cl', });
lyr_MajorRoads_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'ref': 'ref', 'bridge': 'bridge', 'surface': 'surface', 'name': 'name', 'lanes': 'lanes', 'maxspeed': 'maxspeed', 'oneway': 'oneway', 'ref_old': 'ref_old', 'width': 'width', 'sac_scale': 'sac_scale', 'bicycle': 'bicycle', 'foot': 'foot', 'trail_visi': 'trail_visi', 'horse': 'horse', 'layer': 'layer', 'motorcar': 'motorcar', 'ski': 'ski', 'snowmobile': 'snowmobile', 'maxweight': 'maxweight', 'tracktype': 'tracktype', 'name_hi': 'name_hi', 'ford': 'ford', 'horse_scal': 'horse_scal', 'tunnel': 'tunnel', 'alt_name': 'alt_name', 'alt_name_h': 'alt_name_h', 'service': 'service', 'mtb_scale_': 'mtb_scale_', 'mtb_scal_1': 'mtb_scal_1', 'motor_vehi': 'motor_vehi', 'motorcycle': 'motorcycle', 'wheelchair': 'wheelchair', 'old_name': 'old_name', 'int_name': 'int_name', 'maxheight': 'maxheight', 'lane_marki': 'lane_marki', 'AND_import': 'AND_import', 'AND_a_nosr': 'AND_a_nosr', 'designatio': 'designatio', 'lit': 'lit', 'route': 'route', 'access': 'access', 'smoothness': 'smoothness', 'source_geo': 'source_geo', 'source_lan': 'source_lan', 'ele': 'ele', 'noname': 'noname', 'source_bri': 'source_bri', 'source_sur': 'source_sur', 'embankment': 'embankment', 'handrail': 'handrail', 'incline': 'incline', 'ramp': 'ramp', 'step_count': 'step_count', 'addr_city': 'addr_city', 'addr_postc': 'addr_postc', 'bridge_str': 'bridge_str', 'handrail_r': 'handrail_r', 'descriptio': 'descriptio', 'network': 'network', 'type': 'type', });
lyr_SCHOOLS_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'name': 'name', });
lyr_HOSPITALS_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'name': 'name', 'emergency': 'emergency', 'opening_ho': 'opening_ho', 'addr_distr': 'addr_distr', 'addr_full': 'addr_full', 'addr_postc': 'addr_postc', 'addr_state': 'addr_state', 'addr_block': 'addr_block', 'contact_ph': 'contact_ph', 'descriptio': 'descriptio', 'barrier': 'barrier', 'operator_t': 'operator_t', 'pincode': 'pincode', 'health_fac': 'health_fac', 'healthcare': 'healthcare', 'addr_subdi': 'addr_subdi', });
lyr_CHAMBA_boundary_6.set('fieldAliases', {'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_BUILDUP_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'Hidden', 'osm_type': 'Hidden', 'admin_leve': 'Hidden', 'boundary': 'Hidden', 'name': 'TextEdit', 'name_en': 'Hidden', 'name_hi': 'Hidden', 'type': 'Hidden', 'wikidata': 'Hidden', 'wikipedia': 'Hidden', 'amenity': 'Hidden', 'building': 'Hidden', 'natural': 'Hidden', 'water': 'Hidden', 'place': 'Hidden', 'landuse': 'Hidden', 'barrier': 'Hidden', 'highway': 'Hidden', 'religion': 'Hidden', 'addr_city': 'Hidden', 'addr_postc': 'Hidden', 'addr_stree': 'Hidden', 'brand_wiki': 'Hidden', 'brand_wi_1': 'Hidden', 'short_name': 'Hidden', 'leisure': 'Hidden', 'operator': 'Hidden', 'plant_meth': 'Hidden', 'plant_outp': 'Hidden', 'plant_sour': 'Hidden', 'power': 'Hidden', 'protect_cl': 'Hidden', });
lyr_MajorRoads_3.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'TextEdit', 'osm_type': 'Hidden', 'highway': 'Hidden', 'ref': 'Hidden', 'bridge': 'Hidden', 'surface': 'Hidden', 'name': 'TextEdit', 'lanes': 'Hidden', 'maxspeed': 'Hidden', 'oneway': 'Hidden', 'ref_old': 'Hidden', 'width': 'Hidden', 'sac_scale': 'Hidden', 'bicycle': 'Hidden', 'foot': 'Hidden', 'trail_visi': 'Hidden', 'horse': 'Hidden', 'layer': 'Hidden', 'motorcar': 'Hidden', 'ski': 'Hidden', 'snowmobile': 'Hidden', 'maxweight': 'Hidden', 'tracktype': 'Hidden', 'name_hi': 'Hidden', 'ford': 'Hidden', 'horse_scal': 'Hidden', 'tunnel': 'Hidden', 'alt_name': 'Hidden', 'alt_name_h': 'Hidden', 'service': 'Hidden', 'mtb_scale_': 'Hidden', 'mtb_scal_1': 'Hidden', 'motor_vehi': 'Hidden', 'motorcycle': 'Hidden', 'wheelchair': 'Hidden', 'old_name': 'Hidden', 'int_name': 'Hidden', 'maxheight': 'Hidden', 'lane_marki': 'Hidden', 'AND_import': 'Hidden', 'AND_a_nosr': 'Hidden', 'designatio': 'Hidden', 'lit': 'Hidden', 'route': 'Hidden', 'access': 'Hidden', 'smoothness': 'Hidden', 'source_geo': 'Hidden', 'source_lan': 'Hidden', 'ele': 'Hidden', 'noname': 'Hidden', 'source_bri': 'Hidden', 'source_sur': 'Hidden', 'embankment': 'Hidden', 'handrail': 'Hidden', 'incline': 'Hidden', 'ramp': 'Hidden', 'step_count': 'Hidden', 'addr_city': 'Hidden', 'addr_postc': 'Hidden', 'bridge_str': 'Hidden', 'handrail_r': 'Hidden', 'descriptio': 'Hidden', 'network': 'Hidden', 'type': 'Hidden', });
lyr_SCHOOLS_4.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'Hidden', 'amenity': 'TextEdit', 'name': 'TextEdit', });
lyr_HOSPITALS_5.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'emergency': 'Hidden', 'opening_ho': 'TextEdit', 'addr_distr': 'Hidden', 'addr_full': 'TextEdit', 'addr_postc': 'Hidden', 'addr_state': 'TextEdit', 'addr_block': 'Hidden', 'contact_ph': 'TextEdit', 'descriptio': 'Hidden', 'barrier': 'Hidden', 'operator_t': 'Hidden', 'pincode': 'Hidden', 'health_fac': 'Hidden', 'healthcare': 'Hidden', 'addr_subdi': 'Hidden', });
lyr_CHAMBA_boundary_6.set('fieldImages', {'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'Hidden', 'ENGTYPE_2': 'Hidden', 'NL_NAME_2': 'Hidden', 'VARNAME_2': 'Hidden', });
lyr_BUILDUP_2.set('fieldLabels', {'full_id': 'inline label', 'name': 'inline label', });
lyr_MajorRoads_3.set('fieldLabels', {'osm_id': 'inline label', 'name': 'inline label', });
lyr_SCHOOLS_4.set('fieldLabels', {'amenity': 'inline label', 'name': 'inline label', });
lyr_HOSPITALS_5.set('fieldLabels', {'full_id': 'inline label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'inline label', 'name': 'inline label', 'opening_ho': 'inline label', 'addr_full': 'inline label', 'addr_state': 'inline label', 'contact_ph': 'inline label', });
lyr_CHAMBA_boundary_6.set('fieldLabels', {'ISO': 'inline label', 'NAME_0': 'inline label', 'ID_1': 'inline label', 'NAME_1': 'inline label', 'ID_2': 'inline label', 'NAME_2': 'inline label', });
lyr_CHAMBA_boundary_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});