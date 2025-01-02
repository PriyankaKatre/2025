import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export function DoctorCard({ name, specialty, imageUrl, available = true }) {
  return (
      <Card className="overflow-hidden">
          <CardContent className="p-0">
              <img
                  src={imageUrl}
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
                  <p className="text-sm text-muted-foreground">{specialty}</p>
              </div>
          </CardContent>
      </Card>
  );
}

