//	HYPE.documents["ip1"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "ip1_Resources";
	var documentName = "ip1";
	var documentLoaderFilename = "ip1_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE == "undefined") {
		if(typeof window.HYPE_DocumentsToLoad == "undefined") {
			window.HYPE_DocumentsToLoad = new Array();
			window.HYPE_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	var attributeTransformerMapping = {"ReflectionDepth":"FractionalValueTransformer","BackgroundColor":"ColorValueTransformer","BorderWidthBottom":"PixelValueTransformer","WordSpacing":"PixelValueTransformer","BoxShadowXOffset":"PixelValueTransformer","BorderWidthRight":"PixelValueTransformer","Opacity":"FractionalValueTransformer","BorderWidthTop":"PixelValueTransformer","BoxShadowColor":"ColorValueTransformer","BorderColorBottom":"ColorValueTransformer","FontSize":"PixelValueTransformer","BorderRadiusTopRight":"PixelValueTransformer","TextColor":"ColorValueTransformer","Rotate":"DegreeValueTransformer","PaddingLeft":"PixelValueTransformer","BorderColorTop":"ColorValueTransformer","Height":"PixelValueTransformer","Top":"PixelValueTransformer","BackgroundGradientStartColor":"ColorValueTransformer","TextShadowXOffset":"PixelValueTransformer","PaddingTop":"PixelValueTransformer","BackgroundGradientAngle":"DegreeValueTransformer","PaddingBottom":"PixelValueTransformer","PaddingRight":"PixelValueTransformer","BorderColorLeft":"ColorValueTransformer","TextShadowColor":"ColorValueTransformer","Width":"PixelValueTransformer","ReflectionOffset":"PixelValueTransformer","BorderRadiusBottomRight":"PixelValueTransformer","Left":"PixelValueTransformer","LineHeight":"PixelValueTransformer","BoxShadowYOffset":"PixelValueTransformer","BorderColorRight":"ColorValueTransformer","BorderRadiusTopLeft":"PixelValueTransformer","BorderRadiusBottomLeft":"PixelValueTransformer","TextShadowBlurRadius":"PixelValueTransformer","TextShadowYOffset":"PixelValueTransformer","BorderWidthLeft":"PixelValueTransformer","BackgroundGradientEndColor":"ColorValueTransformer","BoxShadowBlurRadius":"PixelValueTransformer","LetterSpacing":"PixelValueTransformer"};

var scenes = [{"timelines":{"DA418B7F-0263-4B9E-B6CE-590595222DA0-7082-0000136416D8B589_pressed":{"framesPerSecond":30,"animations":[{"startValue":"normal","isRelative":true,"endValue":"bold","identifier":"FontWeight","duration":1,"timingFunction":"easeinout","type":0,"oid":"DA418B7F-0263-4B9E-B6CE-590595222DA0-7082-0000136416D8B589","startTime":0}],"identifier":"DA418B7F-0263-4B9E-B6CE-590595222DA0-7082-0000136416D8B589_pressed","name":"DA418B7F-0263-4B9E-B6CE-590595222DA0-7082-0000136416D8B589_pressed","duration":1},"kTimelineDefaultIdentifier":{"framesPerSecond":30,"animations":[{"startValue":"339px","isRelative":true,"endValue":"41px","identifier":"Left","duration":3.0333333015441895,"timingFunction":"easeinout","type":0,"oid":"23DAAA07-6487-4A88-8874-617F5394C0A8-7082-000012F1C91B484E","startTime":0},{"startValue":"211px","isRelative":true,"endValue":"204px","identifier":"Top","duration":3.0333333015441895,"timingFunction":"easeinout","type":0,"oid":"23DAAA07-6487-4A88-8874-617F5394C0A8-7082-000012F1C91B484E","startTime":0},{"startValue":"219px","isRelative":true,"endValue":"35px","identifier":"Top","duration":3.0333333015441895,"timingFunction":"easeinout","type":0,"oid":"531C1801-3161-4A2D-8526-F2EC7FCDC2F9-7082-000012F2E7F2F910","startTime":0},{"startValue":"51px","isRelative":true,"endValue":"41px","identifier":"Left","duration":3.0333333015441895,"timingFunction":"easeinout","type":0,"oid":"531C1801-3161-4A2D-8526-F2EC7FCDC2F9-7082-000012F2E7F2F910","startTime":0},{"startValue":"0.000000","isRelative":true,"endValue":"1.000000","identifier":"Opacity","duration":3.0333333015441895,"timingFunction":"easeinout","type":0,"oid":"531C1801-3161-4A2D-8526-F2EC7FCDC2F9-7082-000012F2E7F2F910","startTime":0},{"startValue":"0.000000","isRelative":true,"endValue":"1.000000","identifier":"Opacity","duration":3.0333333015441895,"timingFunction":"easeinout","type":0,"oid":"23DAAA07-6487-4A88-8874-617F5394C0A8-7082-000012F1C91B484E","startTime":0}],"identifier":"kTimelineDefaultIdentifier","name":"Main Timeline","duration":3.0333333015441895}},"id":"2E3AA5AC-13AB-4646-A1CE-81642579944F-7082-000012E65983481D","sceneIndex":0,"perspective":"600px","oid":"2E3AA5AC-13AB-4646-A1CE-81642579944F-7082-000012E65983481D","initialValues":{"FA0552D2-BA58-4AB2-B444-997948702F8E-7082-00001314F20823E9":{"PaddingTop":"8px","FontFamily":"Zapfino,Script,Cursive","Position":"absolute","InnerHTML":"Island Park","PaddingRight":"8px","Display":"inline","Left":"360px","Height":"15px","Overflow":"visible","Width":"94px","ZIndex":"3","FontSize":"14px","TextColor":"#000000","WordWrap":"break-word","WhiteSpaceCollapsing":"preserve","PaddingBottom":"8px","PaddingLeft":"8px","TagName":"div","Top":"51px"},"23DAAA07-6487-4A88-8874-617F5394C0A8-7082-000012F1C91B484E":{"Position":"absolute","BoxShadowXOffset":"12px","BackgroundOrigin":"content-box","Display":"inline","Left":"339px","BackgroundImage":"IslandPark2011%20005.jpg","BoxShadowBlurRadius":"0px","Height":"161px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"1","BoxShadowColor":"#000000","BoxShadowYOffset":"6px","Width":"240px","TagName":"div","Top":"211px","Opacity":"0.000000"},"531C1801-3161-4A2D-8526-F2EC7FCDC2F9-7082-000012F2E7F2F910":{"Position":"absolute","BoxShadowXOffset":"12px","BackgroundOrigin":"content-box","Display":"inline","Left":"51px","BackgroundImage":"IslandPark2011%20172.jpg","BoxShadowBlurRadius":"0px","Height":"153px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"2","BoxShadowColor":"#000000","BoxShadowYOffset":"6px","Width":"229px","TagName":"div","Top":"219px","Opacity":"0.000000"},"DA418B7F-0263-4B9E-B6CE-590595222DA0-7082-0000136416D8B589":{"ActionOnMouseClick":{"type":1,"sceneOid":"CC9D52F2-7E09-4E31-ABED-3A552191C8F1-7082-0000135059F2A59E","transition":3},"BorderStyleTop":"Solid","BackgroundColor":"#F0F0F0","BorderWidthBottom":"1px","FontWeight":"normal","WordWrap":"break-word","BoxShadowXOffset":"0px","Display":"inline","BorderWidthRight":"1px","BorderStyleRight":"Solid","BorderWidthTop":"1px","BoxShadowColor":"#808080","BorderColorBottom":"#A0A0A0","BorderStyleLeft":"Solid","FontSize":"13px","BorderRadiusTopRight":"6px","TextColor":"#000000","InnerHTML":"Button","PaddingLeft":"6px","BorderColorTop":"#A0A0A0","TextAlign":"center","ZIndex":"4","Height":"15px","BackgroundGradientStartColor":"#FFFFFF","UserSelect":"none","WhiteSpaceCollapsing":"preserve","Top":"256px","TagName":"div","PaddingTop":"6px","BorderStyleBottom":"Solid","BackgroundGradientAngle":"0deg","PaddingBottom":"6px","Position":"absolute","PaddingRight":"6px","BorderColorLeft":"#A0A0A0","Width":"90px","BorderRadiusBottomRight":"6px","Left":"399px","BorderColorRight":"#A0A0A0","BoxShadowYOffset":"0px","BorderRadiusBottomLeft":"6px","ButtonPress":"DA418B7F-0263-4B9E-B6CE-590595222DA0-7082-0000136416D8B589_pressed","BorderRadiusTopLeft":"6px","BorderWidthLeft":"1px","Overflow":"visible","Cursor":"pointer","BackgroundGradientEndColor":"#D8D8D8","BoxShadowBlurRadius":"3px"}},"name":"Untitled Scene","backgroundColor":"#FFFFFF"},{"timelines":{"kTimelineDefaultIdentifier":{"framesPerSecond":30,"animations":[],"identifier":"kTimelineDefaultIdentifier","name":"Main Timeline","duration":0}},"id":"CC9D52F2-7E09-4E31-ABED-3A552191C8F1-7082-0000135059F2A59E","sceneIndex":1,"perspective":"600px","oid":"CC9D52F2-7E09-4E31-ABED-3A552191C8F1-7082-0000135059F2A59E","initialValues":{"3DFD18EC-1D4D-472C-940C-E8AB205594FC-7082-00001352A28B7D38":{"Position":"absolute","BackgroundOrigin":"content-box","Display":"inline","Left":"16px","BackgroundImage":"IslandPark2011%20008.jpg","Height":"264px","Overflow":"visible","Width":"394px","ZIndex":"1","BackgroundSize":"100% 100%","Top":"10px","TagName":"div"}},"name":"Untitled Scene 2","backgroundColor":"#FFFFFF"}];

var javascriptMapping = {};


	
	var Custom = (function() {
	return {
	};
}());

	
	var hypeDoc = new HYPE();
	
	hypeDoc.attributeTransformerMapping = attributeTransformerMapping;
	hypeDoc.scenes = scenes;
	hypeDoc.javascriptMapping = javascriptMapping;
	hypeDoc.Custom = Custom;
	hypeDoc.currentSceneIndex = 0;
	hypeDoc.mainContentContainerID = "ip1_hype_container";
	hypeDoc.resourcesFolderName = resourcesFolderName;
	hypeDoc.showHypeBuiltWatermark = 1;
	hypeDoc.showLoadingPage = false;
	hypeDoc.drawSceneBackgrounds = true;
	hypeDoc.documentName = documentName;

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

