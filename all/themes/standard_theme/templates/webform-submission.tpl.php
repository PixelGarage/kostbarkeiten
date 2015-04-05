<?php

/**
 * @file
 * Customize the display of a webform submission.
 *
 * Available variables:
 * - $node: The node object for this webform.
 * - $submission: The Webform submission array.
 * - $email: If sending this submission in an e-mail, the e-mail configuration
 *   options.
 * - $format: The format of the submission being printed, either "html" or
 *   "text".
 * - $renderable: The renderable submission array, used to print out individual
 *   parts of the submission, just like a $form array.
 */
?>
<?php
/**
 * Fill a new 'PreisWert' node with the data of the submitted webform and save it to the database.
 */
// create a new node
$pw_node = new stdClass();
$pw_node->type = 'preis_wert';
$pw_node->language = LANGUAGE_NONE;
$pw_node->uid = 1;
$pw_node->status = (int)$node->field_publish_posts_immediately[LANGUAGE_NONE][0]['value'];
$pw_node->comment = 0;
$pw_node->promote = 0;
node_object_prepare($pw_node);

// fill the node properties and save it to the database
$pw_node->title = $submission->data[4]['value'][0] . " - " . $submission->data[5]['value'][0]; // Vorname + Alter
$pw_node->field_picture[$pw_node->language][0]['fid'] = $submission->data[1]['value'][0]; // fid
$pw_node->field_wert[$pw_node->language][0]['value'] = $submission->data[2]['value'][0]; // Wert
$pw_node->field_geschichte[$pw_node->language][0]['value'] = $submission->data[3]['value'][0]; // Geschichte
$pw_node->field_vorname[$pw_node->language][0]['value']= $submission->data[4]['value'][0]; // Vorname
$pw_node->field_jahrgang[$pw_node->language][0]['value']= $submission->data[5]['value'][0]; // Alter
$pw_node->field_email[$pw_node->language][0]['value']= $submission->data[6]['value'][0]; // Email
$pw_node = node_submit($pw_node);
node_save($pw_node);

/* Render the submission */
print drupal_render_children($renderable);
?>

