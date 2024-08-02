import { Color, PolylineGlowMaterialProperty, SampledPositionProperty, VelocityOrientationProperty } from 'cesium';
import { Entity, ModelGraphics } from 'resium'

interface propsTypes {
    aircraftPosition: SampledPositionProperty | null;
    tracked: boolean;
    [key: string]: any;
}

export default function Aircraft({ aircraftPosition, tracked, ...props }: propsTypes) {
    return (
        <Entity
            {...props}
            name="aircraft"
            position={aircraftPosition!}
            orientation={new VelocityOrientationProperty(aircraftPosition!)}
            tracked={tracked}
            // availability={new TimeIntervalCollection([
            //     new TimeInterval({ start: startTime, stop: endTime })
            // ])}
            path={{
                resolution: 1,
                material: new PolylineGlowMaterialProperty({
                    glowPower: 0.04,
                    color: Color.LIGHTSKYBLUE,
                }),
                width: 15
            }}
        >
            <ModelGraphics
                uri={"aircraft.glb"}
                minimumPixelSize={128}
                // maximumScale={2000}
            />

        </Entity>
    )
}
