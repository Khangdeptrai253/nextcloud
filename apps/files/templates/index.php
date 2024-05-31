<?php /** @var \OCP\IL10N $l */ ?>
<style>
.modal {
    display: none;
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scrolling if needed */
    background-color: rgba(0,0,0,0.4); /* Black with opacity */
    padding-top: 60px; /* Location of the box */
 
}

/* Modal Content */
.modal-content {
    background-color: #000;
    z-index: 100000; /* Ensure it's above the modal backdrop */
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 70%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); 
    border-radius: 20px;
    color: #FFF;
    display: flex;
    flex-direction: column;
    position: relative; /* Needed for the close button positioning */
}

.modal-content__upload {
    width: 70%;
    display: inline-block;
}

.modal-content__properties {
    width: 30%;
    display: inline-block;
    padding-left: 20px;
}

.close {
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.file-upload {
    width: 80%;
    max-width: 600px;
    margin: auto;
}

.drop-zone {
    border: 4px dashed #0082c8;
    border-radius: 16px;
    padding: 20px;
    text-align: center;
    background-color: transparent;
    cursor: pointer;
}

.drop-zone.dragover {
    border-color: #000;
    background-color: #f0f8ff;
}

/* File preview container */
#preview div {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 18px;
    background-color: transparent;
}

.review-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #fff;
    margin-bottom: 10px;
    border-radius: 5px;
}

.review-item span {
    flex-grow: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.review-item button {
    color: white !important;
    border: none;
    cursor: pointer;
    background-color: transparent;
    padding: 0;
}

.review-item button:hover {
    background-color: #f0f8ff;
}

.form-footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}

</style>
<?php $_['appNavigation']->printPage(); ?>

<!-- New files vue container -->
<div id="app-content-vue" class="hidden"></div>


<!-- <div id="modal_upload" class="modal">
    <div class="modal-content">
		<span class="close" style="display: flex; justify-content: end;">&times;</span>
		<div class="modal-content__upload">
			
				<h2>Upload File</h2>
		<form id="uploadForm">
	<div class="file-upload">
	<div id="dropZone" class="drop-zone">
		<svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 15L12 2M12 2L15 5.5M12 2L9 5.5" stroke="#0082c8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749" stroke="#0082c8" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
		<p style="color: #D8D8D8;">Drag and drop files here or click to select files</p>
				</div>
				<div id="preview"></div>
			</div>
			
					</form>
		</div>
		<div class="modal-content__properties">
			<h2>Properties</h2>
		</div>
        <div class="form-footer">
				<input type="submit" value="Submit" name="submit" id="submit">
			</div>
    </div>
</div> -->
<div id="modal_upload" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <div class="modal-content__upload">
            <h2>Upload File</h2>
            <form id="uploadForm">
                <div class="drop-zone" id="dropZone">
					<svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 15L12 2M12 2L15 5.5M12 2L9 5.5" stroke="#0082c8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749" stroke="#0082c8" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                    <p>Drop files here or click to upload</p>
                    <input type="file" id="inputFile" multiple style="display: none;">
                </div>
                <div id="preview"></div>
               
            </form>
        </div>
        <div class="modal-content__properties">
             <h2>Properties</h2>
        </div>
		 <div class="form-footer">
            <button type="submit" id="submit">Submit</button>
        </div>
    </div>
</div>


<div id="app-content" tabindex="0">


	<input type="checkbox" class="hidden-visually" id="showgridview"
		aria-label="<?php p($l->t('Toggle grid view'))?>"
		<?php if ($_['showgridview']) { ?>checked="checked" <?php } ?>/>
	<label id="view-toggle" for="showgridview" tabindex="0" class="button <?php p($_['showgridview'] ? 'icon-toggle-filelist' : 'icon-toggle-pictures') ?>"
		title="<?php p($_['showgridview'] ? $l->t('Show list view') : $l->t('Show grid view'))?>"></label>


	<!-- Legacy views -->
	<?php foreach ($_['appContents'] as $content) { ?>
	<div id="app-content-<?php p($content['id']) ?>" class="hidden viewcontainer">
	<?php print_unescaped($content['content']) ?>
	</div>
	<?php } ?>
	<div id="searchresults" class="hidden"></div>
</div><!-- closing app-content -->

<!-- config hints for javascript -->
<input type="hidden" name="filesApp" id="filesApp" value="1" />
<input type="hidden" name="usedSpacePercent" id="usedSpacePercent" value="<?php p($_['usedSpacePercent']); ?>" />
<input type="hidden" name="owner" id="owner" value="<?php p($_['owner']); ?>" />
<input type="hidden" name="ownerDisplayName" id="ownerDisplayName" value="<?php p($_['ownerDisplayName']); ?>" />
<input type="hidden" name="fileNotFound" id="fileNotFound" value="<?php p($_['fileNotFound']); ?>" />
<?php if (!$_['isPublic']) :?>
<input type="hidden" name="allowShareWithLink" id="allowShareWithLink" value="<?php p($_['allowShareWithLink']) ?>" />
<input type="hidden" name="defaultFileSorting" id="defaultFileSorting" value="<?php p($_['defaultFileSorting']) ?>" />
<input type="hidden" name="defaultFileSortingDirection" id="defaultFileSortingDirection" value="<?php p($_['defaultFileSortingDirection']) ?>" />
<input type="hidden" name="showHiddenFiles" id="showHiddenFiles" value="<?php p($_['showHiddenFiles']); ?>" />
<input type="hidden" name="cropImagePreviews" id="cropImagePreviews" value="<?php p($_['cropImagePreviews']); ?>" />
<?php endif;


foreach ($_['hiddenFields'] as $name => $value) {?>
<input type="hidden" name="<?php p($name) ?>" id="<?php p($name) ?>" value="<?php p($value) ?>" />


<script>
	console.log(document.querySelector("app-content"));
</script>
<?php }



