import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useNavigate } from "react-router-dom";

export function DoctorCard({ _id, name, speciality, image, available = true }) {
    const navigate = useNavigate();
    return (
        <Card
            className="overflow-hidden"
            onClick={() => {
                window.scrollTo(0, 0);
                navigate(`/appointments/${_id}`);
            }}
        >
            <CardContent className="p-0">
                <img
                    src={image}
                    alt={name}
                    className="w-full aspect-square object-contain"
                />
                <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{name}</h3>
                        {available && (
                            <Badge
                                variant="secondary"
                                className="bg-green-100 text-green-800"
                            >
                                Available
                            </Badge>
                        )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                        {speciality}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}

