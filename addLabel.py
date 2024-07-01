def addLabel(self):
    """
    Add an image label to the data plot at specified x and y coordinates.
    
    Args:
        - **data** (dict): Data to create the label from.
            The data should be in the following format:
                - {"img_url": "http://example.com/image.png", "x": 10, "y": 10}
            And can contain the following keys:
                - **img_url** (str): The URL of the image to display on the label.
                - **x** (float): The x coordinate of the label.
                - **y** (float): The y coordinate of the label.
                - **offset** (dict): The offset of the label.
                    Contains the following keys:
                        - **x** (float): The x offset of the label. Units are plot coordinates.
                        - **y** (float): The y offset of the label. Units are plot coordinates.
        - **styles** (dict): Styles to apply to the label.
            Available Styles:
                - **img_width** (int): The width of the image. Default is 20.
                - **img_height** (int): The height of the image. Default is 20.
        - **id** (str): The id of the label. Default is "label_" + a uuidv4.
        - **layer** (int): The layer to plot the label on. Lower numbered layers are plotted first, higher numbered layers are plotted last and will appear on top of lower layers. Default is 0.

    Runtime Returns:
        - **id** (str): The id of the label. Can be used to remove the label.

    Usage:
        ``dataPlot_instance.addLabel({"img_url": "http://example.com/image.png", "x": 10, "y": 10})``
    """
    code = """
        function addLabel_{id}(data, styles={{}}, id=undefined, layer=0, renderStep="initial"){{//js      
            let label_id = "";

            if (!id || id === "None") {{
                label_id = "label_"+uuidv4();
            }} else {{
                label_id = id;
            }}

            if(isRedrawing_{id} == true && renderStep !== "redraw"){{
                methodQueue_{id}.push({{"method":"addLabel", "args":[data, styles, label_id, layer]}});
                return label_id;
            }}

            let isVisible = true; // Assuming visibility function for data plot context

            label_plotCache_{id}.push({{"data":data, "styles":styles, "id": label_id, "layer": layer}});

            let img_url = data.img_url;
            let x_coord = data.x;
            let y_coord = data.y;
            let offset = data.offset || {{x: 0, y: 0}};
            let x_offset = offset.x;
            let y_offset = offset.y;

            let img_width = styles['img-width'] || styles.img_width || 20;
            let img_height = styles['img-height'] || styles.img_height || 20;

            let plottingLayer = selectOrCreatePlottingLayer_{id}(layer);
            let label = plottingLayer.append("image")
                .attr("x", x_coord + x_offset - img_width / 2)
                .attr("y", y_coord + y_offset - img_height / 2)
                .attr("class", "label_plot_{id} label" + " " + label_id)
                .attr("href", img_url)
                .attr("visibility", isVisible)
                .attr("width", img_width)
                .attr("height", img_height);
            
            // Sort the layer group elements. This is necessary to ensure that the layers are plotted in the correct order since we can't know ahead of time how many layers there will be.
            sortLayers_{id}();

            return label_id;
        }}
    """
    return code.format(id=self.id)
